
const colors = require('colors/safe.js');

/**
 * Custom terminal printer
 * @param {'w' | 'e' | 's' } type - log template to use 
 * @param {string} message - log message
 */ 
const log = (type, message) => {
  let print = message;
  
  switch (type) {
    case 'w': {
      print = colors.cyan(' ... ') + message;
      break;
    }
    case 'wx': {
      print = colors.cyan(' ... ' + message);
      break;
    }
    case 'e': {
      print = colors.red('  ×  ') + message;
      break;
    }
    case 'ex': {
      print = colors.red('  ×  ' + message);
      break;
    }
    case 's': {
      print = colors.green('  ✓  ') + message;
      break;
    }
    case 'sx': {
      print = colors.green('  ✓  ' + message);
      break;
    }
  }
    
    // Print 
    console.log(print);
} 

module.exports = {
  log,
}