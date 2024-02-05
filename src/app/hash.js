import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { getDirectory } from './directory.js';

const getHash = async (tofile) => {
  try {
    const file = path.resolve(tofile);
    const readFile = fs.createReadStream(file);
    const hash = crypto.createHash('sha256');
    await new Promise((resolve, reject) => {
      readFile.on('data', (chunk) => {
        hash.update(chunk);
      });

      readFile.on('end', () => {
        const digest = hash.digest('hex');
        console.log(`${digest}\n`);
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

export { getHash };
