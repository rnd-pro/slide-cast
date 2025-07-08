import './components/SlideCom/SlideCom.js';
import './components/VideoSpot/VideoSpot.js';
import './components/CommonToolbar/CommonToolbar.js';
import styles from './styles.css.js';
import hlCss from './hl.css.js';


let styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles + hlCss);
document.adoptedStyleSheets = [styleSheet];

window.onload = () => {
  document.querySelector('slide-com').focus();
}
