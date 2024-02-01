import os from 'os';
import readline from 'readline';
import { getWelcome, username } from './app/welcome.js';
import { getDirectory } from './app/directory.js';

process.chdir(os.homedir());
getWelcome();
getDirectory();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (command) => {
  switch (command) {
    case '.exit':
      exit();
      break;
  }
});
rl.on('close', () => exit());

function exit() {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
}
