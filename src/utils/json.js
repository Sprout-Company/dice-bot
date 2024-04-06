
const { readFileSync } = require('fs');
const { writeFileSyncRecursive } = require('./utils/fs.js');

/**
 * Manipulate json files
 */
class Json {
  constructor (filename) {
    this.filename = filename;
  }

  read () {
    try {
      const file = readFileSync(this.filename);
      this.data = JSON.parse(file);
    }
    catch (error) {
      this.error = error;
      this.data = {}
    }
  }

  write () { 
    const json = JSON.stringify(this.data, null, 2);
    writeFileSyncRecursive(this.filename, json);
  }
} 

module.exports = {
  Json,
}