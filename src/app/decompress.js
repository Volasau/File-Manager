import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import { getDirectory } from './directory.js';

const getDecompress = async (pathToFile, newPathToFile) => {
  try {
    const pathToOldFile = path.resolve(pathToFile);
    const extname = path.extname(pathToOldFile);
    const nameFile = path.basename(pathToOldFile, extname);
    const pathToNewFile = path.resolve(newPathToFile, nameFile);
    await pipeline(
      fs.createReadStream(pathToOldFile),
      zlib.createBrotliDecompress(),
      fs.createWriteStream(pathToNewFile)
    );
    getDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

export { getDecompress };
