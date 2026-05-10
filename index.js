import './components/SlideIt/SlideIt.js';
import './components/VideoSpot/VideoSpot.js';
import './components/CommonToolbar/CommonToolbar.js';
import './components/GroupFrom/GroupFrom.js';
import styles from './common-css/styles.css.js';
import hlCss from './common-css/hl.css.js';
import { PubSub } from '@symbiotejs/symbiote';
import iconsLink from './icons/link.html.js';

let styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles + hlCss);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];

document.head.insertAdjacentHTML('beforeend', iconsLink);

PubSub.registerCtx({
  hideVideoSpot: false,
  currentSlide: null,
  drawColor: '#fff',
  eraseMode: false,
  recordMode: false,
}, 'APP');

window.onload = async () => {
  let customStyles = document.querySelector('style');
  if (customStyles) {
    let css = customStyles.textContent;
    if (css) {
      let customStyleSheet = new CSSStyleSheet();
      customStyleSheet.replaceSync(css);
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, customStyleSheet];
    }
  }
  window.requestIdleCallback(() => {
    let slideIt = document.querySelector('slide-it');
    if (slideIt) {
      slideIt.focus();
    }
  });
}
