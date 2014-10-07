// last-mod.js
var fs = require('fs');

module.exports = function(filename) {
	if (fs.existsSync(filename)) {
		var stat = fs.statSync(filename);
		return stat.mtime;
	}
	return false;
};
