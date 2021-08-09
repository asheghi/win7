/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import fs from 'fs';

const FILES_DIR = path.resolve(__dirname, '../../files');

const getUniqueImportName = (filePath) => `File_${filePath.split('').reduce((sum, item) => `${sum}${item.charCodeAt(0)}`, '')}`;

const getFileObjectOfFsFile = (filePath) => {
  try {
    const stat = fs.lstatSync(filePath);
    const appPath = (() => {
      const withExt = filePath.replace(`${FILES_DIR}/`, '');
      return withExt.replace(path.extname(withExt), '');
    })();

    if (stat.isDirectory()) {
      return [appPath, 'directory'];
    }

    const extName = path.extname(filePath).substr(1);
    const fileType = (() => {
      if (extName === 'link') return 'shortcut';
      if (extName === 'vue') return 'app';
      if (extName === 'json') return 'json';
      if (['jpg', 'jpeg', 'svg', 'png', 'bmp', 'gif'].includes(extName)) {
        return 'image';
      }
      if (['mp3', 'wav', 'ogg'].includes(extName)) {
        return 'sound';
      }
      if (['mp4', '3gp', 'mkv'].includes(extName)) {
        return 'video';
      }
      return 'text';
    })();
    if (fileType === 'shortcut') {
      return [appPath+'.link', 'shortcut'];
    }
    if (fileType === 'app') {
      return [appPath, 'app']; // will filled later
    }
    if (fileType === 'json') {
      return [appPath, 'json'];
    }
    if (fileType === 'text') {
      return [appPath+'.'+extName, 'text'];
    }

    return [appPath, fileType];
  } catch (e) {
    return false;
  }
};
const getDirFiles = (dir) => fs.readdirSync(dir).filter((x) => !['.gitkeep', '.files'].includes(x)).map((x) => path.resolve(dir, x));

const calcListOfFiles = (dir) => {
  let res = [];
  const files = getDirFiles(dir);
  files.forEach((filePath) => {
    const fsPath = path.resolve(dir, filePath);
    const fileObject = getFileObjectOfFsFile(fsPath);
    if (fileObject[1] === 'directory') {
      const subList = calcListOfFiles(fsPath);
      res.push(...subList)
    }
    res.push(fileObject);
  });
  return res
};

export default () => ({
  name: 'files',
  transform(_src, id) {
    if (id.endsWith('.files')) {
      const files = calcListOfFiles(FILES_DIR);
      return {
        map: null,
        code: `export default ${JSON.stringify(files,null,'\t')}`,
      };
    }
    if(id.endsWith('.mp3')){
      return {
        map:null,
        code:`export default "${id}.mp3"`,
      }
    }
    return null;
  },
});
