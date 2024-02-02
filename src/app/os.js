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
        console.table(
          cpus.map((item) => ({
            Model: item.model,
            'Clock rate (in GHz)': (item.speed / 1000).toFixed(2),
          }))
        );

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
