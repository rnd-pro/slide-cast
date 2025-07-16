import Symbiote from '@symbiotejs/symbiote';
import { md2html } from '@jam-do/jam-tools/iso/md2html.js';

export class GroupFrom extends Symbiote {
  init$ = {
    source: '',
  }

  renderCallback() {
    this.sub('source', async (srcPath) => {
      if (!srcPath) {
        return;
      }
      let fragment = document.createDocumentFragment();

      let sourceMd = await (await window.fetch(srcPath)).text();
      let slides = sourceMd.split('---\n').map((slideTxt) => {
        return slideTxt.trim();
      });
      for (let slideContent of slides) {
        let slide = document.createElement('slide-it');
        if (slideContent.startsWith('## ')) {
          let caption = slideContent.split('\n')[0].replace('## ', '').trim();
          slideContent = slideContent.replace('## ', '').replace(caption, '').trim();
          slide.setAttribute('caption', caption);
        }
        slide.innerHTML = await md2html(slideContent);
        fragment.appendChild(slide);
      }
      this.replaceWith(fragment);
    });
  }
}

GroupFrom.bindAttributes({
  source: 'source',
});

GroupFrom.reg('group-from');

export default GroupFrom;