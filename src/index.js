import os from 'os';
import readline from 'readline';
import { getWelcome, username } from './app/welcome.js';
import { getDirectory } from './app/directory.js';
import { getlist } from './app/list.js';
import { getUp } from './app/up.js';
import { getCd } from './app/cd.js';
import { getOsInfo } from './app/os.js';
import { getHash } from './app/hasch.js';
import { getCat } from './app/cat.js';
import { addFile } from './app/add.js';
import { getRename } from './app/rn.js';
import { getRemove } from './app/rm.js';
import { getCopy } from './app/cp.js';
import { getMove } from './app/mv.js';
import { getCompress } from './app/compress.js';

process.chdir(os.homedir());
getWelcome();
getDirectory();

let dirctory = process.cwd();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', async (command) => {
  console.log(command);
  const args = command.split(' ');
  console.log(args);

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

    case 'cat':
      if (args.length === 2) {
        await getCat(args[1]);
      } else {
        console.log('Invalid input.\n');
      }
      break;

    case 'add':
      if (args.length === 2) {
        await addFile(args[1]);
      } else {
        console.log('Invalid input.\n');
      }
      break;

    case 'rn':
      if (args.length === 3) {
        await getRename(args[1], args[2]);
      } else {
        console.log('Invalid input.\n');
      }
      break;

    case 'cp':
      if (args.length === 3) {
        await getCopy(args[1], args[2]);
      } else {
        console.log('Invalid input.\n');
      }
      break;

    case 'mv':
      if (args.length === 3) {
        await getMove(args[1], args[2]);
      } else {
        console.log('Invalid input.\n');
      }
      break;

    case 'rm':
      getRemove(args[1]);
      break;

    case 'os':
      if (args.length === 2) {
        await getOsInfo(args[1]);
      } else {
        console.log('Invalid input.\n');
      }
      break;

    case 'hash':
      if (args.length === 2) {
        await getHash(args[1]);
      } else {
        console.log('Invalid input.\n');
      }
      break;

    case 'compress':
      if (args.length === 3) {
        await getCompress(args[1], args[2]);
      } else {
        console.log('Invalid input.\n');
      }
      break;

    default:
      console.log('Invalid input.\n');
  }
});
rl.on('close', () => exit());

function exit() {
  console.log(`Thank you for using File Manager, ${username}, goodbye!\n`);
  process.exit();
}
