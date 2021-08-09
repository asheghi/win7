import { markRaw, reactive } from 'vue';

function insertModuleToFiles(app, module) {
  const file = resolveFileByPath(app.path) || app;
  file.fetching = false;
  file.module = module.default || module;
  if (module && module[0] === 'webapp') {
    file.type = 'webapp';
  }
}

export function fetchApp(app, { raw = false } = {}) {
  if (app.type === 'directory') {
    return;
  }
  if (app.module) {
    return;
  }
  let path = app.path;
  if (app.type === 'app') {
    path += '.vue';
  }

  if(['text'].includes(app.type)){
    raw = true;
  }

  try {
    return import('../../files/' + path + (raw ? '?raw' : ''))
      .then(m => {
        insertModuleToFiles(app, m);
      });
  } catch (e) {
    console.error(e);
  }
}

export function fetchApps() {
  const apps = [
    ...getDirectoryFiles('C:/Windows'),
    ...getDirectoryFiles('C:/Program Files'),
  ];
  apps
    .forEach(app => {
      fetchApp(app);
    });
}

export const fileObject = (path, type, ...rest) => ({
  path,
  type,
  module: null,
  fetching: false,
  fetch_error: null,
  extras: rest[0],
});

export const files = reactive({
  list: [],
});

export const parsePath = (path) => (path || '').split('/');

export const getPathName = (path) => {
  const parsedPath = parsePath(path);
  return parsedPath[parsedPath.length - 1];
};
export const getPathDir = (path) => {
  const parsedPath = parsePath(path);
  if (parsedPath.length) {
    parsedPath.splice(parsedPath.length - 1, 1);
  }
  return parsedPath.join('/');
};

export function getDirectoryFiles(path, recursive = false) {
  return files.list.filter(
    (fileItem) => {
      if (recursive) {
        return path ? fileItem.path.startsWith(`${path}/`) : true;
      }
      return getPathDir(fileItem.path) === path;
    },
  );
}

export const isPathExists = (path) => {
  for (let i = files.list.length - 1; i >= 0; i -= 1) {
    if (files.list[i].path === path) {
      return true;
    }
  }
  return false;
};

export const createNewFile = (theFile) => {
  if (files.list.find((fileItem) => fileItem.path === theFile.path)) {
    throw new Error(`${theFile.path} already exists!`);
  } else {
    files.list.push(theFile);
  }
};

export const createNewFolder = (basePath) => {
  if (!basePath) {
    throw new Error('Cannot Create Folder in Root Dir!');
  }
  const newName = (i) => `New Folder${i > 1 ? ` (${i})` : ''}`;
  let i = 1;
  let newFolderPath;
  do {
    newFolderPath = `${basePath}/${newName(i)}`;
    i += 1;
  } while (isPathExists(newFolderPath));

  const theFile = fileObject(newFolderPath, 'directory');
  return createNewFile(theFile);
};

export const resolveFileByPath = (path) => files.list.find((fileItem) => fileItem.path === path);

export const resolveFileSource = async (arg) => {
 if (!arg) {
    throw new Error(`Cannot resolve ${arg}`);
  }
  if (arg.type === 'shortcut') {
    await fetchApp(arg, { raw: true });
    let path = arg.module.trim();
    if (path.endsWith('.vue')) {
      path = path.substring(0, path.indexOf('.vue'));
    }
    let file = resolveFileByPath(path);
    return resolveFileSource(file);
  }
  return arg;
};

export const resolveFileRunner = async (_thefile) => {
  const theFile = await resolveFileSource(_thefile);
  if (theFile.type === 'app') {
    return theFile.module;
  }

  const apps = [
    ...getDirectoryFiles('C:/Windows'),
    ...getDirectoryFiles('C:/Program Files'),
  ];

  for (const app of apps) {
    if (!app.module) {
      await fetchApp(app);
    }
    if (app.module && typeof app.module.canHandle === 'function' && app.module.canHandle(theFile)) {
      return app.module;
    }
  }

  return null;
};

export const isPathsRelated = (pathBase, pathCheck) => pathBase === pathCheck
  || getPathDir(pathCheck) === pathBase;

export const deleteFileByPath = (path) => {
  if (getPathDir(path) === '') {
    throw new Error('Cannot delete root directory files!');
  }
  for (let i = files.list.length - 1; i >= 0; i -= 1) {
    if (isPathsRelated(path, files.list[i].path)) {
      files.list.splice(i, 1);
    }
  }
};

export const moveAndCopyCheck = (pathFrom, pathTo) => {
  if (getPathDir(pathFrom) === '' || getPathDir(pathTo) === '') {
    throw new Error('Cannot change root directory files!');
  }
  return true;
};

export const moveFileByPath = (pathFrom, pathTo) => {
  moveAndCopyCheck(pathFrom, pathTo);
  for (let i = files.list.length - 1; i >= 0; i -= 1) {
    if (isPathsRelated(pathTo, files.list[i].path)) {
      deleteFileByPath(pathTo);
    }
  }
  for (let i = files.list.length - 1; i >= 0; i -= 1) {
    if (isPathsRelated(pathFrom, files.list[i].path)) {
      files.list[i].path = files.list[i].path.replace(pathFrom, pathTo);
    }
  }
  return true;
};

export const copyFileByPath = (pathFrom, pathTo) => {
  moveAndCopyCheck(pathFrom, pathTo);
  for (let i = files.list.length - 1; i >= 0; i -= 1) {
    if (isPathsRelated(pathTo, files.list[i].path)) {
      deleteFileByPath(pathTo);
    }
  }
  const theFile = resolveFileByPath(pathFrom);
  const clonedFile = {
    ...theFile,
    path: pathTo,
    data: {
      ...theFile.data,
    },
  };
  createNewFile(clonedFile);
  return true;
};

export const searchFiles = (basePath, matcher, recursive = true) => getDirectoryFiles(
  basePath,
  recursive,
)
  .filter(matcher);

export const getFileWindowProperties = async (_theFile) => {
  const theFile = await resolveFileSource(_theFile);
  const runner = await resolveFileRunner(theFile);
  const isNotApp = theFile.type !== 'app';
  const ret = runner && typeof runner.windowProperties === 'function' ? runner.windowProperties(isNotApp && theFile) : {};
  if (theFile.type === 'json') {
    ret.icon = theFile.module && theFile.module[1] && theFile.module[1].icon;
  }
  return ret;
};
