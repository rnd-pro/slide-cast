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

h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 4em);
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

ol {
  list-style: none;
  margin-left: 0;
  margin-top: 1em;
  margin-bottom: 1em;
  counter-reset: list-item;

  li {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    counter-increment: list-item;

    &::before {
      content: counter(list-item);
      margin-right: 0.5em;
      color: var(--slide-accent-clr, currentColor);
      transition: color 1s;
    }
  }
}

blockquote {
  display: inline-block;
  border-left: 6px solid var(--slide-accent-clr, rgba(255, 255, 255, 0.5));
  padding: .7em;
  margin-bottom: var(--gap-max);
  background-color: rgba(255, 255, 255, 0.1);
  border-top-right-radius: var(--gap-max);
  border-bottom-right-radius: var(--gap-max);
  min-width: 60%;
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

img[pre-drawing] {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
`;
