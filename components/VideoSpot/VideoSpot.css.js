export default /*css*/ `
video-spot {
  display: inline-flex;
  position: fixed;
  bottom: calc(var(--gap-max) * 2);
  right: calc(var(--gap-max) * 2);
  width: 300px;
  height: 300px;
  color: var(--clr-2);
  border-radius: 100%;
  overflow: hidden;
  border: 5px solid var(--clr-2);
  pointer-events: none;

  &::part(video) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    overflow: hidden;
    filter: grayscale(90%);
  }
}
`;