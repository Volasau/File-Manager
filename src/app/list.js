import fs from 'fs/promises';
import { getDirectory } from './directory.js';

const getlist = async (directory) => {
  try {
    const filesAll = await fs.readdir(directory, { withFileTypes: true });

    const folders = filesAll.filter((file) => file.isDirectory());
    const files = filesAll.filter((file) => file.isFile());

    const list = folders.concat(files);

    console.table(
      list.map((item) => ({
        Name: item.name,
        Type: item.isDirectory() ? 'directory' : 'file',
      }))
    );

    getDirectory();
  } catch (error) {
    console.error('Operation failed\n');
    getDirectory();
  }
};

export { getlist };
