import Symbiote from '@symbiotejs/symbiote';
import template from './SlideIt.html.js';
import styles from './SlideIt.css.js';
import { md2html } from '@jam-do/jam-tools/iso/md2html.js';
import { randClr } from '../../common-css/styles.css.js';
import { PubSub } from '@symbiotejs/symbiote';

const intObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let appData = PubSub.getCtx('APP');
      if (appData.read('currentSlide') !== entry.target) {
        entry.target.focus();
      }
    }
  });
}, {
  rootMargin: '0px',
  threshold: 0.2,
});

window.addEventListener('scroll', (e) => {
  let targets = document.querySelectorAll('slide-it');
  intObserver.disconnect();
  window.setTimeout(() => {
    targets.forEach((target) => {
      intObserver.observe(target);
    });
  }, 200);
});

class SlideIt extends Symbiote {

  renderShadow = true;

  gradClr1 = randClr();
  gradClr2 = randClr();

  init$ = {
    caption: '',
    number: '',
  }

  nextSlide() {
    /** @type {SlideIt} */
    let nextSlide = this.nextElementSibling;
    if (nextSlide && nextSlide instanceof SlideIt) {
      nextSlide.focus();
    }
  }

  prevSlide() {
    /** @type {SlideIt} */
    let prevSlide = this.previousElementSibling;
    if (prevSlide && prevSlide instanceof SlideIt) {
      prevSlide.focus();
    }
  }

  focus() {
    // super.focus();
    this.$['APP/currentSlide'] = this;
    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.body.style.setProperty('--grad-clr-1', this.gradClr1);
    document.body.style.setProperty('--grad-clr-2', this.gradClr2);
    document.body.style.setProperty('--slide-accent-clr', this.gradClr1);
    document.body.style.setProperty('--slide-sub-clr', this.gradClr2);
    this.$['APP/hideVideoSpot'] = this.hasAttribute('hide-video-spot');
  }

  get canvasRect() {
    return this.canvas.getBoundingClientRect();
  }

  get rect() {
    return this.getBoundingClientRect();
  }

  #draw(e) {
    // draw line to the current mouse position
    let x = e.clientX - this.canvasRect.left;
    let y = e.clientY - this.canvasRect.y;
    
    this.ctx.beginPath();
    this.ctx.moveTo(this.x || x, this.y || y);
    this.ctx.lineTo(x, y);
    this.ctx.strokeStyle = this.$['APP/drawColor'];
    this.ctx.lineWidth = this.$['APP/eraseMode'] ? 10 : 5;
    this.ctx.globalCompositeOperation = this.$['APP/eraseMode'] ? 'destination-out' : 'source-over';
    this.ctx.stroke();
    
    this.x = x;
    this.y = y;
  }

  #initDrawing() {
    this.canvas = this.ref.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.rect.width;
    this.canvas.height = this.rect.height;
    let draw = this.#draw.bind(this);
    this.canvas.addEventListener('mousedown', (e) => {
      this.canvas.addEventListener('mousemove', draw);
    });
    this.canvas.addEventListener('mouseup', () => {
      this.canvas.removeEventListener('mousemove', draw);
      this.x = null;
      this.y = null;
    });
  }

  clearDrawing() {
    this.ctx.clearRect(0, 0, this.rect.width, this.rect.height);
  }

  renderCallback() {
    this.sub('importJSDWA', (val) => {
      if (!val) {
        return;
      }
      if (!val.includes('//')) {
        if (val.startsWith('/')) {
          val = window.location.origin + val;
        } else {
          val = window.location.origin + '/' + val;
        }
      }
      try {
        import(val).then((module) => {
          this.innerHTML += module.default;
        });
      } catch (e) {
        console.error('Failed to import slide', val, e);
      }
    });

    this.sub('importMd', async (val) => {
      if (!val) {
        return;
      }
      try {
        let md = await (await fetch(val)).text();
        this.innerHTML += await md2html(md);
      } catch (e) {
        console.error('Failed to import slide', val, e);
      }
    });

    window.addEventListener('keydown', (e) => {
      if (this.$['APP/currentSlide'] !== this) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        this.nextSlide(); 
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        this.prevSlide();
      }
    });

    window.addEventListener('resize', (e) => {
      this.canvas.width = this.rect.width;
      this.canvas.height = this.rect.height;
    });

    this.addEventListener('click', (e) => {
      this.focus();
    });

    window.requestAnimationFrame(() => {
      this.#initDrawing();
    });

    if (!this.hasAttribute('slide-number') && this.$.caption) {
      window.requestIdleCallback(() => {
        let idx = [...document.querySelectorAll('slide-it:not([slide-number])')].indexOf(this);
        this.$.number = (idx + 1) + '. ';
      });
    }

    intObserver.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    intObserver.unobserve(this);
  }

}

SlideIt.bindAttributes({
  caption: 'caption',
  'slide-number': 'number',
  'import-jsdwa': 'importJSDWA',
  'import-md': 'importMd',
});

SlideIt.template = template;
SlideIt.rootStyles = styles;

SlideIt.reg('slide-it');