
const { green, red, cyan } = require('colors/safe');

/**
 * Custom terminal printer
 * @param {'w' | 'e' | 's' } type - log template to use 
 * @param {string} message - log message
 */ 
const log = (type, message) => {
  let print = message;
  
  switch (type) {
    case 'w': {
      print = cyan(' ... ') + message;
      break;
    }
    case 'wx': {
      print = cyan(' ... ' + message);
      break;
    }
    case 'e': {
      print = red('  ×  ') + message;
      break;
    }
    case 'ex': {
      print = red('  ×  ' + message);
      break;
    }
    case 's': {
      print = green('  ✓  ') + message;
      break;
    }
    case 'sx': {
      print = green('  ✓  ' + message);
      break;
    }
  }
    
    // Print 
    console.log(print);
}

module.exports = {
  log,
}