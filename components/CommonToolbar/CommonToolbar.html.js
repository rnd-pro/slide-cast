import { html } from '@symbiotejs/symbiote';

export default html`
<label part="color-picker">
  <input ${{onchange: 'onColorChange'}} type="color" part="color-picker-input" value="#ffffff">
  <div part="color-picker-preview"></div>
</label>
<button ${{onclick: 'onPrev'}} part="btn-prev">&uarr;</button>
<button ${{onclick: 'onNext'}} part="btn-next">&darr;</button>
<button ${{onclick: 'onClear'}} part="btn-clear">х</button>
<button ${{onclick: 'onToggleRecorder'}} part="btn-recorder">{{recIcon}}</button>
`;