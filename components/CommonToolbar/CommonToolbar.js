import Symbiote from '@symbiotejs/symbiote';
import template from './CommonToolbar.html.js';
import styles from './CommonToolbar.css.js';
import { Recorder } from '../../lib/Recorder.js';

export class CommonToolbar extends Symbiote {

  renderShadow = true;

  init$ = {
    recIcon: '⏺︎',
    onColorChange: (e) => {
      CommonToolbar.appCtx.drawColor = e.target.value;
      this.style.setProperty('--clr-draw-current', CommonToolbar.appCtx.drawColor);
    },
    onPrev: () => {
      CommonToolbar.appCtx.currentSlide?.prevSlide();
    },
    onNext: () => {
      CommonToolbar.appCtx.currentSlide?.nextSlide();
    },
    onClear: () => {
      CommonToolbar.appCtx.currentSlide?.clearDrawing();
    },
    onToggleRecorder: () => {
      if (Recorder.active) {
        Recorder.stop();
        this.$.recIcon = '⏺︎';
      } else {
        Recorder.start();
        this.$.recIcon = '⏹︎';
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