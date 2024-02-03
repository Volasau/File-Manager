import fs from 'fs/promises';
import { getDirectory } from './directory.js';

const addFile = async (nameFile) => {
  try {
    await fs.open(nameFile, 'w');
    getDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

export { addFile };
