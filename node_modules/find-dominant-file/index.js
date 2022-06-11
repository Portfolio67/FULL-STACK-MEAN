const path = require('path');
const fs = require('fs');

const findDominantFile = (dir, filenames, retDir = false) => {
  if (!dir) {
    throw new Error(`Base directory required. Received ${
      JSON.stringify(dir)
    }.`);
  }
  if (!filenames || !filenames.length) {
    throw new Error(`Filename required. Received ${
      JSON.stringify(filenames)
    }.`);
  }

  dir = path.resolve(dir);
  const { root } = path.parse(dir);

  if (!Array.isArray(filenames)) {
    filenames = [filenames];
  }
  for (const filename of filenames) {
    let currentDir = dir;
    while (currentDir !== root) {
      const maybe = path.join(currentDir, filename);
      if (fs.existsSync(maybe)) return retDir ? currentDir : maybe;
      currentDir = path.dirname(currentDir);
    }
  }
};

module.exports = findDominantFile;
module.exports.default = findDominantFile;
