export default /*css*/ `
slide-it {
  display: block;
  position: relative;
  width: calc(100vw - var(--gap-max) * 2);
  height: calc(100vh - var(--gap-max) * 2);
  background-color: rgba(0, 0, 0, .92);
  color: var(--clr-2);
  margin: var(--gap-max);
  border-radius: var(--gap-max);
  overflow: auto;
  cursor: url(./cursor.png), crosshair;
  outline: none;

  &::part(caption) {
    color: var(--clr-2);
    margin: 0;
    padding: 0;
    padding: calc(var(--gap-max) * 2);
    pointer-events: none;
  }

  &::part(content) {
    color: var(--clr-2);
    padding: calc(var(--gap-max) * 2);
    padding-top: 0;
    pointer-events: none;
  }

  &::part(canvas) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
}
`;