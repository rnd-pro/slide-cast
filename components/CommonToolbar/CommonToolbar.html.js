import { html } from '@symbiotejs/symbiote';
import { i } from '../../icons/i.js';
import link from '../../icons/link.html.js';

export default html`
${link}
<label part="color-picker">
  <input ${{onchange: 'onColorChange'}} type="color" part="color-picker-input" value="#ffffff">
  <div part="color-picker-preview"></div>
</label>
<button ${{onclick: 'onErase', innerHTML: 'eraseIcon'}} part="btn-erase"></button>
<button ${{onclick: 'onClear'}} part="btn-clear">${i('clear')}</button>
<button ${{onclick: 'onPrev', ondblclick: 'onTop'}} part="btn-prev">${i('arrow_upward')}</button>
<button ${{onclick: 'onNext', ondblclick: 'onBottom'}} part="btn-next">${i('arrow_downward')}</button>
<button ${{onclick: 'onFs'}} part="btn-fs">${i('fullscreen')}</button>
<button ${{onclick: 'onToggleRecorder', innerHTML: 'recIcon'}} part="btn-recorder"></button>
`;