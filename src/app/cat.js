import fs from 'fs';
import path from 'path';
import { getDirectory } from './directory.js';

const getCat = async (tofile) => {
  try {
    const file = path.resolve(tofile);
    const readFile = fs.createReadStream(file);

    await new Promise((resolve, reject) => {
      readFile.on('data', (chunk) => {
        process.stdout.write(chunk);
      });

      readFile.on('end', () => {
        process.stdout.write(`\n`);
        resolve();
      });

      readFile.on('error', (error) => {
        console.error('Operation failed');
        reject();
      });
    });
    getDirectory();
  } catch (error) {}
};

export { getCat };
