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

  --bg-accent-grad: linear-gradient(135deg,rgb(163, 111, 111),rgb(93, 114, 159));

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

  font-family: sans-serif;
  font-size: 32px;
  line-height: 1.5;
  font-weight: 400;
  text-rendering: optimizeLegibility;

  color: var(--clr-2);
  background-color: #3e3e3e;
  background-size: 100% 100vh;
  background: var(--bg-accent-grad);
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
    background-color: rgba(255, 255, 255, 0.1);
    background: var(--bg-accent-grad);
    border-radius: var(--gap-max);
  }

} 
`;