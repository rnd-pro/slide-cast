import Symbiote from '@symbiotejs/symbiote';
import template from './CommonToolbar.html.js';
import styles from './CommonToolbar.css.js';
import { Recorder } from '../../lib/Recorder.js';

export class CommonToolbar extends Symbiote {

  renderShadow = true;

  init$ = {
    recIcon: 'R',
    eraseIcon: 'x',
    onColorChange: (e) => {
      this.$['APP/drawColor'] = e.target.value;
      this.style.setProperty('--clr-draw-current', e.target.value);
    },
    onPrev: () => {
      this.$['APP/currentSlide']?.prevSlide();
    },
    onTop: () => {
      let firstSlide = document.querySelector('slide-it');
      firstSlide?.focus();
    },
    onNext: () => {
      this.$['APP/currentSlide']?.nextSlide();
    },
    onBottom: () => {
      let lastSlide = document.querySelector('slide-it:last-of-type');
      lastSlide?.focus();
    },
    onErase: () => {
      this.$['APP/eraseMode'] = !this.$['APP/eraseMode'];
      this.$.eraseIcon = this.$['APP/eraseMode'] ? '>' : 'x';
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
        this.$.recIcon = 'R';
      } else {
        Recorder.start();
        this.$.recIcon = 'S';
      }
    }
  }

}

CommonToolbar.template = template;
CommonToolbar.rootStyles = styles;

CommonToolbar.reg('common-toolbar');