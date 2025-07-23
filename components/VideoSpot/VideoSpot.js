import Symbiote from '@symbiotejs/symbiote';
import template from './VideoSpot.html.js';
import styles from './VideoSpot.css.js';

class VideoSpot extends Symbiote {

  renderShadow = true;

  init() {
    // realtime video from webcam
    navigator.mediaDevices.getUserMedia(
      {
        video: true,
        audio: false,
        video: {
          width: 1920,
          height: 1080,
        },
      }).then((stream) => {
        this.ref.video.srcObject = stream;
        this.ref.video.play();
      });
  }

  renderCallback() {
    this.init();

    window.requestIdleCallback(() => {
      this.sub('APP/hideVideoSpot', (val) => {
        val ? (this.style.opacity = 0) : (this.style.opacity = 1);
      });
    });

  }

}

VideoSpot.template = template;
VideoSpot.rootStyles = styles;

VideoSpot.reg('video-spot');
