import { getDirectory } from './directory.js';

const getCd = async (pathDirectory) => {
  try {
    process.chdir(pathDirectory);
    getDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

export { getCd };
