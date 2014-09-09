var m = require('./last-mod');

var filename = process.argv[2];
var timestamp = m(filename);
if (timestamp !== false) {
	var date = new Date(timestamp);
	
	var fin = date.getDate() + '.' + 
		(date.getMonth() + 1) + '.' +
		date.getFullYear();
		
	fin += '  ' + date.getHours() + '.' +
		date.getMinutes();
	
	console.log(fin);
}
else {
	console.log("Error message");
}