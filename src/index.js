import os from 'os';
import { getWelcome } from './app/welcome.js';

process.chdir(os.homedir());
getWelcome();
console.log(`You are currently in ${process.cwd()}\n`);
