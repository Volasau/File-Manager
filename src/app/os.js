import os from 'os';
import { getDirectory } from './directory.js';

const getOsInfo = async (command) => {
  try {
    switch (command) {
      case '--EOL':
        console.log(JSON.stringify(os.EOL));
        getDirectory();
        break;
      case '--cpus':
        const cpus = os.cpus();
        console.log(`Overall amount of CPUS: ${cpus.length}`);
        cpus.forEach((el, index) => {
          console.log(
            `CPU ${index + 1}: Model - ${el.model} - (${el.speed} GHz)`
          );
        });
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
