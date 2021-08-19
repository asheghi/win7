import { addEventListener, removeEventListener } from './eventListener';
import { handleDrop } from '../services/fs';

const captureOptions = {
  capture: true,
};

function getBuffer(fileBlob, resolve) {
  const reader = new FileReader();
  reader.readAsArrayBuffer(fileBlob);
  reader.onload = function () {
    const arrayBuffer = reader.result;
    const bytes = new Uint8Array(arrayBuffer);
    resolve(bytes);
  };
}

export const drag = (bindingElement = null, handler) => {
  const handlerParent = (event) => {
    const userAnswer = handler(event);
    if (userAnswer === false) {
      return event.preventDefault();
    }
    event.stopPropagation();
    const data = JSON.stringify(userAnswer);
    return event.dataTransfer.setData('text', data);
  };

  bindingElement.setAttribute('draggable', true);
  addEventListener(bindingElement, 'dragstart', handlerParent, captureOptions);

  return {
    stop: () => {
      removeEventListener(bindingElement, 'dragstart', handlerParent, captureOptions);
    },
  };
};

function getDroppedFiles(event) {
  let i;
  const ev = event;
  let files = [];
  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        const file = ev.dataTransfer.items[i].getAsFile();
        files.push(file);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (i = 0; i < ev.dataTransfer.files.length; i++) {
      files.push(ev.dataTransfer.files[i]);
    }
  }
  return files;
}

export const drop = (bindingElement = null, path, handler) => {
  const handlerParent = async (event) => {
    event.preventDefault();
    let files = getDroppedFiles(event);

    if (files.length) {
      await handleDrop(path,files);
      return;
    }

    event.preventDefault();
    const userData = event.dataTransfer.getData('text');
    if (userData) {
      const data = JSON.parse(userData);
      handler(data);
    }
  };
  const allowDrop = (event) => {
    event.preventDefault();
  };

  addEventListener(bindingElement, 'dragover', allowDrop, captureOptions);
  addEventListener(bindingElement, 'drop', handlerParent, captureOptions);

  return {
    stop: () => {
      removeEventListener(bindingElement, 'dragover', allowDrop, captureOptions);
      removeEventListener(bindingElement, 'drop', handlerParent, captureOptions);
    },
  };
};
