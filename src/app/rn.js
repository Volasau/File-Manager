import fs from 'fs/promises';
import path from 'path';
import { getDirectory } from './directory.js';

const getRename = async (pathToFile, newFileName) => {
  try {
    const file = path.resolve(pathToFile);
    const directory = path.dirname(file);
    const pathFromFile = path.resolve(directory, newFileName);
    await fs.rename(file, pathFromFile);
    getDirectory();
  } catch (err) {
    console.log('Operation failed');
  }
};

export { getRename };
