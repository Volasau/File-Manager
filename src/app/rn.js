import fs from 'fs/promises';
import path from 'path';
import { getDirectory } from './directory.js';

const getRename = async (pathToFile, newName) => {
  try {
    const oldFile = path.resolve(pathToFile);
    await fs.rename(oldFile, newName);
    getDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

export { getRename };
