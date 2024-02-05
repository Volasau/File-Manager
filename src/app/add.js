import fs from 'fs/promises';
import { getDirectory } from './directory.js';

const addFile = async (nameFile) => {
  try {
    const fileHandle = await fs.open(nameFile, 'w');
    await fileHandle.close();

    getDirectory();
  } catch (error) {
    console.error('Operation failed\n');
    getDirectory();
  }
};

export { addFile };
