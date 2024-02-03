import fs from 'fs';
import path from 'path';
import { getDirectory } from './directory.js';
import { pipeline } from 'stream/promises';

const getCat = async (tofile) => {
  try {
    const file = path.resolve(tofile);
    const readFile = fs.createReadStream(file);

    readFile.on('data', (chunk) => {
      process.stdout.write(chunk);
    });
    readFile.on('end', () => {
      process.stdout.write(`\n`);
    });
    readFile.on('error', () => {
      console.error('Operation failed');
    });
    getDirectory();
  } catch {
    console.error('Operation failed');
  }
};
export { getCat };
