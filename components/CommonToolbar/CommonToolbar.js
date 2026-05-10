import Symbiote from '@symbiotejs/symbiote';
import template from './CommonToolbar.html.js';
import styles from './CommonToolbar.css.js';
import { Recorder } from '../../lib/Recorder.js';
import { i } from '../../icons/i.js';
import iconsCss from '../../icons/icons.css.js';

export class CommonToolbar extends Symbiote {

  init$ = {
    recIcon: '',
    eraseIcon: '',
    onColorChange: (/** @type {Event & {target: HTMLInputElement}} */ e) => {
      this.$['APP/drawColor'] = e.target.value;
      this.style.setProperty('--clr-draw-current', e.target.value);
    },
    onPrev: () => {
      this.$['APP/currentSlide']?.prevSlide();
    },
    onTop: () => {
      let firstSlide = /** @type {HTMLElement} */ (document.querySelector('slide-it'));
      firstSlide?.focus();
    },
    onNext: () => {
      this.$['APP/currentSlide']?.nextSlide();
    },
    onBottom: () => {
      let lastSlide = /** @type {HTMLElement} */ (document.querySelector('slide-it:last-of-type'));
      lastSlide?.focus();
    },
    onErase: () => {
      this.$['APP/eraseMode'] = !this.$['APP/eraseMode'];
    },
    onClear: () => {
      this.$['APP/currentSlide']?.clearDrawing();
    },
    onFs: () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    },
    onToggleRecorder: () => {
      if (Recorder.active) {
        Recorder.stop();
      } else {
        Recorder.start();
      }
    }
  }

  renderCallback() {
    this.sub('APP/eraseMode', (val) => {
      this.$.eraseIcon = val ? i('ink_eraser') : i('draw');
    });
    this.sub('APP/recordMode', (val) => {
      this.$.recIcon = val ? i('stop') : i('screen_record');
    });
  }

}

CommonToolbar.template = template;
CommonToolbar.rootStyles = styles;
CommonToolbar.shadowStyles = iconsCss;

CommonToolbar.reg('common-toolbar');