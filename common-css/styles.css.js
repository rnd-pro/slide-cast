export default /*css*/ `
::-webkit-scrollbar {
  display: none;
}

:root {
  --clr-1: #000;
  --clr-2: #fff;

  --gap-min: 2px;
  --gap-mid: 10px;
  --gap-max: 20px;

  font-family: sans-serif;
  font-size: 32px;
  line-height: 1.5;
  font-weight: 400;
  text-rendering: optimizeLegibility;
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

  color: var(--clr-1);
  background-color: #3e3e3e;
  background-size: 100% 100vh;
  background: linear-gradient(135deg,rgb(163, 111, 111),rgb(93, 114, 159));
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
      color: rgba(255, 255, 255, 1);
    }
  }
}
`;