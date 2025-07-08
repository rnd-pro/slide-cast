import Symbiote from '@symbiotejs/symbiote';
import template from './SlideCom.html.js';
import styles from './SlideCom.css.js';
import { CommonToolbar } from '../CommonToolbar/CommonToolbar.js';

class SlideCom extends Symbiote {

  static slideCount = 0;

  init$ = {
    caption: this.getAttribute('caption'),
    slideNumber: ++SlideCom.slideCount,
  }

  nextSlide() {
    /** @type {SlideCom} */
    let nextSlide = this.nextElementSibling;
    if (nextSlide && nextSlide instanceof SlideCom) {
      nextSlide.focus();
    }
  }

  prevSlide() {
    /** @type {SlideCom} */
    let prevSlide = this.previousElementSibling;
    if (prevSlide && prevSlide instanceof SlideCom) {
      prevSlide.focus();
    }
  }

  focus() {
    super.focus();
    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    CommonToolbar.appCtx.currentSlide = this;
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
    this.ctx.strokeStyle = CommonToolbar.appCtx.drawColor;
    this.ctx.lineWidth = 5;
    this.ctx.stroke();
    
    this.x = x;
    this.y = y;
  }

  #initDrawing() {
    this.canvas = this.shadow.querySelector('canvas');
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

    this.sub('importFrom', (val) => {
      import(val).then((module) => {
        this.innerHTML += module.default;
      });
    });

    window.addEventListener('keydown', (e) => {
      if (CommonToolbar.appCtx.currentSlide !== this) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        this.nextSlide(); 
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        this.prevSlide();
      }
    });

    this.#initDrawing();

    window.addEventListener('resize', (e) => {
      this.canvas.width = this.rect.width;
      this.canvas.height = this.rect.height;
    });

    this.addEventListener('click', (e) => {
      this.focus();
    });
  }

}

SlideCom.bindAttributes({
  caption: 'caption',
  'import-from': 'importFrom',
});

SlideCom.template = template;
SlideCom.shadowStyles = styles;

SlideCom.reg('slide-com');