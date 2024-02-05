import fs from 'fs/promises';
import { getDirectory } from './directory.js';

const getRemove = async (directory) => {
  try {
    await fs.unlink(directory);

    getDirectory();
  } catch (error) {
    console.error('Operation failed\n');
    getDirectory();
  }
};

export { getRemove };
