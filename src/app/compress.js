import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import { getDirectory } from './directory.js';

const getCompress = async (pathToFile, newPathToFile) => {
  try {
    const pathToOldFile = path.resolve(pathToFile);
    const nameFile = path.basename(pathToOldFile);
    const pathToNewFile = path.resolve(newPathToFile, `${nameFile}.br`);

    await pipeline(
      fs.createReadStream(pathToOldFile),
      zlib.createBrotliCompress(),
      fs.createWriteStream(pathToNewFile)
    );
    getDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

export { getCompress };
