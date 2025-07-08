import { html } from '@symbiotejs/symbiote';

export default html`
<canvas part="canvas"></canvas>
<h2 part="caption"><span part="caption-number">{{slideNumber}}.</span> {{caption}}</h2>
<div part="content"><slot></slot></div>
`;