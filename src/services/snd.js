/* eslint-disable import/prefer-default-export */
import { openFile } from './wm';
import { fileObject } from './fs';

export const playSound = (soundSrc) => new Promise((resolve) => openFile(fileObject(soundSrc, 'sound', {
  hidden: true,
  onEnd: resolve,
})));
