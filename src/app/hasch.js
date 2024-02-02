import fs from 'fs/promises';
import crypto from 'crypto';
import { getDirectory } from './directory.js';

const getHash = async (tofile) => {
  try {
    const file = await fs.readFile(tofile);
    const hash = crypto.createHash('sha256').update(file).digest('hex');
    console.log(`${hash}\n`);
    getDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

export { getHash };
