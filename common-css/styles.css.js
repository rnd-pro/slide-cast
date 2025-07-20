let h = Math.floor(Math.random() * 121);

/**
 * @param {number} [opacity]
 * @returns {string}
 */
export function randClr(opacity = 1) {
  return `hsla(${h += 51}deg, 50%, 40%, ${opacity})`;
}

export default /*css*/ `
::-webkit-scrollbar {
  display: none;
}

@property --grad-clr-1 {
  syntax: '<color>';
  inherits: false;
  initial-value: ${randClr()};
}

@property --grad-clr-2 {
  syntax: '<color>';
  inherits: false;
  initial-value: ${randClr()};
}

:root {
  --clr-1: #000;
  --clr-2: #fff;

  --gap-min: 2px;
  --gap-mid: 10px;
  --gap-max: 20px;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  font-size: 32px;
  line-height: 1.5;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  color: var(--clr-2);
  background-color: #3e3e3e;
  background: linear-gradient(135deg, var(--grad-clr-1), var(--grad-clr-2));
  transition: --grad-clr-1 .4s, --grad-clr-2 .4s;
  background-size: 100% 100vh;
  background-attachment: fixed;
}

ul {
  list-style: none;
  margin-left: 0;
  margin-top: 1em;
  margin-bottom: 1em;

  li {
    margin-top: 0.5em;
    margin-bottom: 0.5em;

    &::before {
      content: '>';
      margin-right: 0.5em;
      color: var(--slide-accent-clr, currentColor);
      transition: color 1s;
    }
  }
}

blockquote {
  border-left: 4px solid rgba(255, 255, 255, 0.5);
  padding: .7em;
  margin-bottom: var(--gap-max);
  background-color: rgba(255, 255, 255, 0.1);
}

table {
  border-collapse: separate;
  border-spacing: 4px;
  width: 100%;
  margin-bottom: var(--gap-max);
  font-size: 32px;
  table-layout: fixed;

  th {
    padding: 1em;
    color: var(--clr-2);
  }

  td {
    padding: 1em;
    background-color: var(--slide-accent-clr, rgba(255, 255, 255, 0.1));
    border-radius: var(--gap-max);
    transition: background-color 1s;
  }

} 
`;