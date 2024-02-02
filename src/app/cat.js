import fs from 'fs';
import { pipeline } from 'stream/promises';
import { getDirectory } from './directory.js';

const getCat = async (tofile) => {
  try {
    if (!fs.existsSync(tofile)) {
      console.error('Operation failed');
      return;
    }

    await pipeline(
      fs
        .createReadStream(tofile)
        .on('data', (chunk) => {
          process.stdout.write(`${chunk}\n`);
        })
        .on('end', () => {
          process.stdout.write('\n');
          getDirectory();
        })
    );
  } catch (error) {
    console.error('Operation failed');
  }
};

export { getCat };
