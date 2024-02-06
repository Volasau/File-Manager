import fs from 'fs/promises';
import { getDirectory } from './directory.js';

const addFile = async (nameFile) => {
  try {
    await fs.writeFile(nameFile, '');

    getDirectory();
  } catch (error) {
    console.error('Operation failed\n');
    console.error(
      'Check if you have used forbidden characters in the name: / \\ : * ? " < > |\n '
    );
    getDirectory();
  }
};

export { addFile };
