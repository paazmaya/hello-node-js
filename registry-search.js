/**
 * Search latest version of the given keyword
 * matching package
 */


var name = 'node-sass';
var url = 'http://registry.npmjs.org';

var util = require('util');
var nano = require('nano');

if (process.argv.length === 3) {
	name = process.argv.pop();
}

var server = nano(url);
var registry = server.use(name);

//console.log(util.inspect(registry));

registry.get('latest', function(err, body) {
	if (err) {
		util.error(err);
	}
	//console.log(util.inspect(body));

	console.log('Latest version of ' + name + ' is ' + body.version);
});
