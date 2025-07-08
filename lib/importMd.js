import { md2html } from '@jam-do/jam-tools/iso/md2html.js';

export default async function importMd(path) {
  const response = await fetch(path);
  const text = await response.text();
  return md2html(text);
}

export { importMd };