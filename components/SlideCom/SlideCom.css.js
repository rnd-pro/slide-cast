export default /*css*/ `
slide-com {
  display: block;
  position: relative;
  width: calc(100vw - var(--gap-max) * 2);
  height: calc(100vh - var(--gap-max) * 2);
  background-color: rgba(0, 0, 0, .95);
  color: var(--clr-2);
  margin: var(--gap-max);
  border-radius: var(--gap-max);
  counter-reset: slide-number;
  overflow: auto;
  cursor: crosshair;

  &::part(caption) {
    color: var(--clr-2);
    margin: 0;
    padding: 0;
    padding: calc(var(--gap-max) * 2);
    pointer-events: none;
    counter-increment: slide-number;

    &::before {
      content: counter(slide-number);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &::part(content) {
    color: var(--clr-2);
    padding: calc(var(--gap-max) * 2);
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