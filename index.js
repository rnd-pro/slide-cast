import './components/SlideIt/SlideIt.js';
import './components/VideoSpot/VideoSpot.js';
import './components/CommonToolbar/CommonToolbar.js';
import './components/GroupFrom/GroupFrom.js';
import styles from './common-css/styles.css.js';
import hlCss from './common-css/hl.css.js';
import { PubSub } from '@symbiotejs/symbiote';

let styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles + hlCss);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];

PubSub.registerCtx({
  hideVideoSpot: false,
  currentSlide: null,
  drawColor: '#fff',
  eraseMode: false,
}, 'APP');

window.onload = async () => {
  window.requestIdleCallback(() => {
    let slideIt = document.querySelector('slide-it');
    if (slideIt) {
      slideIt.focus();
    }
  });
}
