import os from 'os';
import { getDirectory } from './directory.js';

const getOsInfo = async (command) => {
  try {
    switch (command) {
      case '--EOL':
        console.log(JSON.stringify(os.EOL));
        getDirectory();
        break;

      default:
        console.log('Invalid input.\n');
    }
  } catch (error) {
    console.log('Operation failed');
  }
};
export { getOsInfo };
