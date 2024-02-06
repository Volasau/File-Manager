import os from 'os';
import readline from 'readline';
import { getWelcome, username } from './app/welcome.js';
import { getDirectory } from './app/directory.js';
import { getlist } from './app/list.js';
import { getUp } from './app/up.js';
import { getCd } from './app/cd.js';
import { getOsInfo } from './app/os.js';
import { getHash } from './app/hash.js';
import { getCat } from './app/cat.js';
import { addFile } from './app/add.js';
import { getRename } from './app/rn.js';
import { getRemove } from './app/rm.js';
import { getCopy } from './app/cp.js';
import { getMove } from './app/mv.js';
import { getCompress } from './app/compress.js';
import { getDecompress } from './app/decompress.js';
import { parseCommand } from './app/parseCommand.js';

process.chdir(os.homedir());
getWelcome();
getDirectory();

let dirctory = process.cwd();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', async (command) => {
  const strInput = command.trim();

  const args = parseCommand(strInput);

  switch (args[0]) {
    case '.exit':
      if (args.length === 1) {
        exit();
      } else {
        getErrorMessange();
        console.error('Command .exit does not accept arguments\n');
        getDirectory();
      }
      break;

    case 'up':
      if (args.length === 1) {
        await getUp();
        dirctory = process.cwd();
      } else {
        getErrorMessange();
        console.error('Command up does not accept arguments\n');
        getDirectory();
      }
      break;

    case 'cd':
      if (args.length === 2) {
        await getCd(args[1]);
        dirctory = process.cwd();
      } else {
        getErrorMessange();
        console.error('Command cd takes one argument\n');
        getDirectory();
      }
      break;

    case 'ls':
      if (args.length === 1) {
        await getlist(dirctory);
      } else {
        getErrorMessange();
        console.error('Command ls does not accept arguments\n');
        getDirectory();
      }
      break;

    case 'cat':
      if (args.length === 2) {
        await getCat(args[1]);
      } else {
        getErrorMessange();
        console.error('Command cat takes one argument\n');
        getDirectory();
      }
      break;

    case 'add':
      if (args.length === 2) {
        await addFile(args[1]);
      } else {
        getErrorMessange();
        console.error('Command add takes one argument\n');
        getDirectory();
      }
      break;

    case 'rn':
      if (args.length === 3) {
        await getRename(args[1], args[2]);
      } else {
        getErrorMessange();
        console.error('Command rn takes two argument\n');
        getDirectory();
      }
      break;

    case 'cp':
      if (args.length === 3) {
        await getCopy(args[1], args[2]);
      } else {
        getErrorMessange();
        console.error('Command cp takes two argument\n');
        getDirectory();
      }
      break;

    case 'mv':
      if (args.length === 3) {
        await getMove(args[1], args[2]);
      } else {
        getErrorMessange();
        console.error('Command mv takes two argument\n');
        getDirectory();
      }
      break;

    case 'rm':
      if (args.length === 2) {
        getRemove(args[1]);
      } else {
        getErrorMessange();
        console.error('Command rm takes one argument\n');
        getDirectory();
      }
      break;

    case 'os':
      if (args.length === 2) {
        await getOsInfo(args[1]);
      } else {
        getErrorMessange();
        console.error('Command os takes one argument\n');
        getDirectory();
      }
      break;

    case 'hash':
      if (args.length === 2) {
        await getHash(args[1]);
      } else {
        getErrorMessange();
        console.error('Command hash takes one argument\n');
        getDirectory();
      }
      break;

    case 'compress':
      if (args.length === 3) {
        await getCompress(args[1], args[2]);
      } else {
        getErrorMessange();
        console.error('Command compress takes two argument\n');
        getDirectory();
      }
      break;

    case 'decompress':
      if (args.length === 3) {
        await getDecompress(args[1], args[2]);
      } else {
        getErrorMessange();
        console.error('Command decompress takes two argument\n');
        getDirectory();
      }
      break;

    default:
      console.error('Invalid input.\n');
      getDirectory();
  }
});
rl.on('close', () => exit());

function exit() {
  console.log(`Thank you for using File Manager, ${username}, goodbye!\n`);
  process.exit();
}

function getErrorMessange() {
  console.error('Invalid input.\n');
  // console.error('Operation failed\n');
}
