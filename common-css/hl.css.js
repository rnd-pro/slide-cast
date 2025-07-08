let hlSelectorsList = [
  '.hljs-string',
  '.hljs-comment',
  '.hljs-attr',
  '.hljs-attribute',
  '.hljs-function',
  '.hljs-variable',
  '.hljs-title',
  '.hljs-property',
  '.hljs-selector-class',
  '.hljs-keyword',
  '.hljs-tag',
  '.hljs-name',
  '.hljs-number',
  '.hljs-params',
  '.hljs-literal',
];

let hlStyles = '';
let step = 0;
let hsl = () => {
  return `hsl(${step++ * 150}deg 85% 74%)`;
};

hlSelectorsList.forEach((selector) => {
  hlStyles += /*css*/ `
    code ${selector} {
      color: ${hsl()};
    }
  `;
});

export default /*css*/ `

code:not([class]) {
  display: inline-block;
  padding: .05em;
  padding-left: .5em;
  padding-right: .5em;
  margin-left: .2em;
}

code[class] {
  display: block;
  padding: var(--gap-max, 20px);
  margin-top: 1em;
  margin-bottom: 1em;
  color: #fff;
  overflow: auto;
  border-left: 4px solid rgba(255, 255, 255, 1);
  padding-left: 1em;
}
code .hljs-comment {
  opacity: .5;
  font-style: italic;
}
code .function_ {
  font-style: italic;
}
${hlStyles}
`;
