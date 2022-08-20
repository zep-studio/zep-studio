import JSZip from 'jszip';

const zip = new JSZip();

export function zipZepApp(src: string) {
  zip.file('main.js', src);
  return zip.generateAsync({ type: 'blob' });
}
