import os from 'os';
import { getDirectory } from './directory.js';

const getOsInfo = async (command) => {
  try {
    switch (command) {
      case '--EOL':
        console.log(`Default system EOL: ${JSON.stringify(os.EOL)}\n`);
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
      case '--homedir':
        const homeDirectory = os.homedir();
        console.log(`Home directory: ${homeDirectory}\n`);
        getDirectory();
        break;
      case '--username':
        const username = os.userInfo().username;
        console.log(`System User name: ${username}\n`);
        getDirectory();
        break;
      case '--architecture':
        const architecture = os.arch();
        console.log(`CPU architecture:  ${architecture}\n`);
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
