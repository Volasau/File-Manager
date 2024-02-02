import os from 'os';
import readline from 'readline';
import { getWelcome, username } from './app/welcome.js';
import { getDirectory } from './app/directory.js';
import { getlist } from './app/list.js';
import { getUp } from './app/up.js';
import { getCd } from './app/cd.js';
import { getOsInfo } from './app/os.js';

process.chdir(os.homedir());
getWelcome();
getDirectory();

let dirctory = process.cwd();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', async (command) => {
  const args = command.split(' ');

  switch (args[0]) {
    case '.exit':
      exit();
      break;
    case 'up':
      getUp();
      dirctory = process.cwd();
      break;
    case 'cd':
      getCd(args[1]);
      dirctory = process.cwd();
      break;
    case 'ls':
      if (args.length === 1) {
        await getlist(dirctory);
      } else {
        console.log('Invalid input.\n');
      }
      break;
    case 'os':
      getOsInfo(args[1]);
      break;
    default:
      console.log('Invalid input.\n');
  }
});
rl.on('close', () => exit());

function exit() {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
}
