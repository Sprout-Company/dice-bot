const fs = require('fs');
const path = require('path');

/**
 * Recursively creates directories and writes a file
 */
const writeFileSyncRecursive = (filename, content) => {

  if (!fs.existsSync(path.join(filename, '..'))) {
    const folders = filename.split(path.sep).slice(0, -1);
    folders.reduce((acc, folder) => {
      const currentPath = acc + folder + path.sep;
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath);
      }
      return currentPath;
    }, '');
  }
  
  fs.writeFileSync(filename, content);
}

module.exports = {
  writeFileSyncRecursive,
}