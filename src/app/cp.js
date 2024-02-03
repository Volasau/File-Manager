import fs from 'fs';
import path, { basename } from 'path';
import { pipeline } from 'stream/promises';
import { getDirectory } from './directory.js';

const getCopy = async (pathToFile, newPathToFile) => {
  try {
    const absoluteOldPath = path.resolve(pathToFile);
    const absoluteNewPath = path.resolve(
      newPathToFile,
      basename(absoluteOldPath)
    );
    await pipeline(
      fs.createReadStream(absoluteOldPath),
      fs.createWriteStream(absoluteNewPath)
    );
    getDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

export { getCopy };
