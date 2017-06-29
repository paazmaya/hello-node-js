// last-mod.js
var fs = require('fs');

module.exports = function(filename) {

  try {
		var stat = fs.statSync(filename);
		return stat.mtime;
  }
  catch(error) {
    console.error(error.message);
  }

	return false;
};
