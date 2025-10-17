export class Recorder {

  static recordedChunks = [];

  static async start() {
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

    this.mediaRecorder.onstop = () => {
      const blob = new Blob(this.recordedChunks, {
        type: this.mediaRecorder.mimeType,
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `slide-cast_${new Date().toISOString()}.` + (this.mediaRecorder.mimeType.includes('mp4') ? 'mp4' : 'webm');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      this.recordedChunks.length = 0;
      this.mediaRecorder = null;
      this.stream = null;
      console.log('Recorder stopped');
    };

    this.mediaRecorder.start();
  }

  static stop() {
    this.mediaRecorder?.stop();
  }

  static get active() {
    return this.mediaRecorder && this.mediaRecorder.state === 'recording';
  }

}