import Symbiote from '@symbiotejs/symbiote';
import template from './CommonToolbar.html.js';
import styles from './CommonToolbar.css.js';
import { Recorder } from '../../lib/Recorder.js';

export class CommonToolbar extends Symbiote {

  renderShadow = true;

  init$ = {
    recIcon: 'R',
    onColorChange: (e) => {
      CommonToolbar.appCtx.drawColor = e.target.value;
      this.style.setProperty('--clr-draw-current', CommonToolbar.appCtx.drawColor);
    },
    onPrev: () => {
      CommonToolbar.appCtx.currentSlide?.prevSlide();
    },
    onTop: () => {
      let firstSlide = document.querySelector('slide-it');
      firstSlide?.focus();
    },
    onNext: () => {
      CommonToolbar.appCtx.currentSlide?.nextSlide();
    },
    onBottom: () => {
      let lastSlide = document.querySelector('slide-it:last-of-type');
      lastSlide?.focus();
    },
    onClear: () => {
      CommonToolbar.appCtx.currentSlide?.clearDrawing();
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

  static appCtx = {
    drawColor: '#ffffff',
    currentSlide: null,
  }

}

CommonToolbar.template = template;
CommonToolbar.rootStyles = styles;

CommonToolbar.reg('common-toolbar');