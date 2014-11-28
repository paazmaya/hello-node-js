/**
 * Search latest version of the given keyword 
 * matching package
 */
'use strict';

var name = 'node-sass';
var url = 'http://registry.npmjs.org';

var util = require('util');
var nano = require('nano');

if (process.argv.length === 3) {
	name = process.argv.pop();
}

var server = nano(url)
var registry = server.use(name);

//util.puts(util.inspect(registry));
	
registry.get('latest', function(err, body) {
	if (err) {
		util.error(err);
	}
	//util.puts(util.inspect(body));
	
	util.puts('Latest version of ' + name + ' is ' + body.version);
});
