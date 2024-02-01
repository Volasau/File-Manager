import os from 'os';
import { getWelcome } from './app/welcome.js';
import { getDirectory } from './app/directory.js';

process.chdir(os.homedir());
getWelcome();
getDirectory();
