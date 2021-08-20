import { fetchFile, fetchTextFile, getPathName } from '../services/fs';

import fileIcon from '../assets/icons/jpg.png?url';
import textIcon from '../assets/icons/txt.png?url';
import cameraIcon from '../assets/icons/camera.png?url';
import webAppIcon from '../assets/icons/html.png?url';
import computerIcon from '../assets/icons/my-computer.png?url';
import notePadIcon from '../assets/icons/notepad.png?url';
import AudioFileIcon from '../assets/icons/mp3.png?url';
import MediaPlayerIcon from '../assets/icons/media-player.png?url';
import driveIcon from '../assets/icons/drive.png?url';
import folderIcon from '../assets/icons/folder.png?url';
import icon from '../assets/icons/background-capplet.png';
import photoViewer from '../assets/icons/jpg.png';
import { getFileType } from '../services/apps';
import { basename } from 'path-browserify';

export default {
  'Explorer': {
    canHandle: ({ fileType }) => fileType === 'directory',
    windowProperties: async (filePath) => {
      const calcIcon = (file) => {
        if (!file || file.endsWith('.exe')) {
          return computerIcon;
        }
        return filePath.endsWith(':') ? driveIcon : folderIcon;
      };
      return ({
        icon: calcIcon(filePath),
        width: 600,
        height: 500,
        title: '',
        isSystemApp: true,
        taskbarTitle: !filePath || filePath.endsWith('.exe') ? 'Computer' : basename(filePath),
      });
    },
  },
  'MediaPlayer': {
    canHandle: ({ fileType }) => ['audio','video'].includes(fileType),
    windowProperties: async (file) => {
      return ({
        icon: MediaPlayerIcon,
        height: 300,
        width:300,
        resizable: true,
        maximizable: true,
        isSystemApp: true,
        taskbarTitle: !file || file.endsWith('.exe') ? 'Media Player' : basename(file),
      });
    },
    thumbnail:async function (file) {
      const fileType = getFileType(file);
      if (['audio','video'].includes(fileType)) {
        //todo fetch thumbnail from binary file
        /*const buffer = await fetchFile(file);
        return URL.createObjectURL(new Blob([buffer],));*/
      }
      return AudioFileIcon;
    }
  },
  'Notepad': {
    canHandle: ({ fileType }) => fileType === 'text',
    windowProperties: (file) => {
      return ({
        icon: file && !file.endsWith('.exe') ? textIcon : notePadIcon,
        width: 600,
        height: 500,
        isSystemApp: true,
        taskbarTitle: !file || file.endsWith('.exe') ? 'NotePad' : basename(file),
      });
    },
  },
  'WebAppRunner': {
    canHandle: ({ fileType }) => fileType === 'webapp',
    windowProperties: async (filePath) => {
      const fileContent = await fetchTextFile(filePath);
      const parsed = JSON.parse(fileContent);
      return {
        title: 'Method Draw',
        icon: webAppIcon,
        width: 600,
        height: 500,
        ...parsed,
        isSystemApp: true,
        taskbarTitle: !filePath || filePath.endsWith('.exe') ? 'Web Application' : basename(filePath),
      };
    },
  },
  'Camera': {
    canHandle: ({ fileType }) => false,
    windowProperties: (file) => ({
      icon: file ? fileIcon : cameraIcon,
      width: 600,
      height: 500,
      title: file ? getPathName(file.path) : 'Camera',
      taskbarTitle: !file || file.endsWith('.exe') ? 'Camera' : basename(file),
    }),
  },
  'ChangeBackground': {
    canHandle: () => false,
    windowProperties: () => ({
      title: 'Change Background',
      icon,
      width: 900,
      height: 490,
      maximizable: false,
      isSystemApp: true,
      taskbarTitle: 'Change Background',
    }),
  },
  'PhotoViewer': {
    canHandle: ({ fileType }) => fileType === 'image',
    windowProperties: async (file) => {
      return ({
        title: 'Photo Viewer',
        //window icon
        icon: photoViewer,
        width: 900,
        height: 700,
        maximizable: true,
        isSystemApp: true,
        taskbarTitle: !file || file.endsWith('.exe') ? 'Photo Viewer' : basename(file),
      });
    },
    thumbnail: async (file) => {
      const fileType = getFileType(file);
      if (fileType === 'image') {
        const buffer = await fetchFile(file);
        return URL.createObjectURL(new Blob([buffer],));
      }
      return photoViewer;
    }
  }
};
