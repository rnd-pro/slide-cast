import Symbiote from '@symbiotejs/symbiote';
import template from './CommonToolbar.html.js';
import styles from './CommonToolbar.css.js';

const videoStream = await navigator.mediaDevices.getDisplayMedia({
  video: true,
  audio: false,
  video: {
    width: 1920,
    height: 1080,
  },
  selfBrowserSurface: 'include',
});

const audioStream = await navigator.mediaDevices.getUserMedia({
  audio: true,
});

const stream = new MediaStream([...videoStream.getTracks(), ...audioStream.getTracks()]);
const mediaRecorder = new MediaRecorder(stream);
const recordedChunks = [];

mediaRecorder.ondataavailable = (event) => {
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
  }
};

mediaRecorder.onstop = () => {
  const blob = new Blob(recordedChunks, { type: 'video/webm' });
  // You can then download the blob or upload it to a server
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'screencast.webm';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  recordedChunks.length = 0;
};

// mediaRecorder.start();
// To stop recording: mediaRecorder.stop();

export class CommonToolbar extends Symbiote {

  renderShadow = true;

  init$ = {
    recIcon: '⏺︎',
    onColorChange: (e) => {
      CommonToolbar.appCtx.drawColor = e.target.value;
      this.style.setProperty('--clr-draw-current', CommonToolbar.appCtx.drawColor);
    },
    onPrev: () => {
      CommonToolbar.appCtx.currentSlide?.prevSlide();
    },
    onNext: () => {
      CommonToolbar.appCtx.currentSlide?.nextSlide();
    },
    onClear: () => {
      CommonToolbar.appCtx.currentSlide?.clearDrawing();
    },
    onToggleRecorder: () => {
      if (mediaRecorder.state === 'inactive') {
        mediaRecorder.start();
        this.$.recIcon = '⏹︎';
      } else {
        mediaRecorder.stop();
        this.$.recIcon = '⏺︎';
      }
    }
  }

  static appCtx = {
    drawColor: '#ffffff',
    currentSlide: null,
  }

}

CommonToolbar.template = template;
CommonToolbar.rootStyles = styles;

CommonToolbar.reg('common-toolbar');