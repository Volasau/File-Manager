import { getDirectory } from './directory.js';

const getUp = async () => {
  try {
    process.chdir('..');
    getDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

export { getUp };
