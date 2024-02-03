import fs from 'fs';
import { unlink } from 'fs/promises';
import path, { basename } from 'path';
import { pipeline } from 'stream/promises';
import { getDirectory } from './directory.js';

const getMove = async (pathToFile, newPathToFile) => {
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
    await unlink(absoluteOldPath);
    getDirectory();
  } catch (error) {
    console.error('Operation failed');
  }
};

export { getMove };
