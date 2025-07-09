import './components/SlideIt/SlideIt.js';
import './components/VideoSpot/VideoSpot.js';
import './components/CommonToolbar/CommonToolbar.js';
import styles from './common-css/styles.css.js';
import hlCss from './common-css/hl.css.js';


let styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles + hlCss);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];

window.onload = () => {
  document.querySelector('slide-com').focus();
}
