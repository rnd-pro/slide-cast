import { html } from '@symbiotejs/symbiote';

export default html`
<canvas part="canvas" ref="canvas"></canvas>
<h2 part="caption">{{number}}{{caption}}</h2>
<div part="content"><slot></slot></div>
`;