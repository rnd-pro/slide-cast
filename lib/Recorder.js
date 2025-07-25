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
    this.mediaRecorder = new MediaRecorder(this.stream);
    this.recordedChunks = [];

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);
      }
    };

    this.mediaRecorder.onstop = () => {
      const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'screencast.webm';
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