import { PubSub } from '@symbiotejs/symbiote';

export class Recorder {

  static recordedChunks = [];
  /** @type {MediaRecorder | null} */
  static mediaRecorder = null;
  /** @type {MediaStream | null} */
  static stream = null;

  static async start() {
    const videoStream = await navigator.mediaDevices.getDisplayMedia({
      audio: false,
      video: {
        width: 1920,
        height: 1080,
      },
      // @ts-ignore - Chromium-specific extension
      selfBrowserSurface: 'include',
    });

    const audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    this.stream = new MediaStream([...videoStream.getTracks(), ...audioStream.getTracks()]);
    let mimeType = 'video/webm';
    if (MediaRecorder.isTypeSupported('video/mp4; codecs=hev1')) {
      mimeType = 'video/mp4; codecs=hev1';
    } else if (MediaRecorder.isTypeSupported('video/mp4; codecs=avc1.4D401F')) {
      mimeType = 'video/mp4; codecs=avc1.4D401F';
    } else if (MediaRecorder.isTypeSupported('video/mp4; codecs=h264')) {
      mimeType = 'video/mp4; codecs=h264';
    } else if (MediaRecorder.isTypeSupported('video/mp4; codecs=avc1')) {
      mimeType = 'video/mp4; codecs=avc1';
    } else if (MediaRecorder.isTypeSupported('video/mp4')) {
      mimeType = 'video/mp4';
    }
    console.log('Using mimeType for recording:', mimeType);
    this.mediaRecorder = new MediaRecorder(this.stream, {
      videoBitsPerSecond: 2500000,
      mimeType,
    });
    this.recordedChunks = [];

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);
      }
    };

    let recMimeType = this.mediaRecorder.mimeType;

    this.mediaRecorder.onstop = () => {
      const blob = new Blob(this.recordedChunks, {
        type: recMimeType,
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `slide-cast_${new Date().toISOString()}.` + (recMimeType.includes('mp4') ? 'mp4' : 'webm');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      this.recordedChunks.length = 0;
      this.mediaRecorder = null;
      this.stream = null;
      console.log('Recorder stopped');
      PubSub.getCtx('APP').pub('recordMode', false);
    };

    this.mediaRecorder.start();
    PubSub.getCtx('APP').pub('recordMode', true);
  }

  static stop() {
    this.mediaRecorder?.stop();
  }

  static get active() {
    return this.mediaRecorder && this.mediaRecorder.state === 'recording';
  }

}