export default /*css*/ `
common-toolbar {
  display: inline-flex;
  gap: 10px;
  position: fixed;
  bottom: calc(var(--gap-max) * 2);
  left: calc(var(--gap-max) * 2);
  z-index: 100000;

  &::part(color-picker) {
    ${btn}
  }

  &::part(color-picker-input) {
    width: 100%;
    height: 100%;
    border: none;
    opacity: 0;
  }

  &::part(color-picker-preview) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: var(--clr-draw-current, #ffffff);
    pointer-events: none;
  }

  &::part(btn-prev) {
    ${btn}
  }

  &::part(btn-next) {
    ${btn}
  }

  &::part(btn-clear) {
    ${btn}
  }

  &::part(btn-record) {
    ${btn}
  }

  &::part(btn-stop) {
    ${btn}
  }
}
`;