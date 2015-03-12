/**
 * Brute force a password that uses SHA1 hash for encryption
 */
'use strict';

var crypto = require('crypto'),
	util = require('util');

var start = (new Date()).getTime();
var time = function () {
	return (new Date()).getTime() - start;
};

// from https://www.npmjs.org/package/char-range
var range = function(start, stop) {
	var result = [];
	for (var idx = start.charCodeAt(0), end = stop.charCodeAt(0); idx <= end; ++idx) {
		result.push(String.fromCharCode(idx));
	}
	return result;
};

var chars = range('a', 'z').concat(range('A', 'Z'),
	['å', 'ä', 'ö'], ['Å', 'Ä', 'Ö'],
	range('0', '9'));
//console.log(util.inspect(chars));

var createHash = function (word) {
	var shasum = crypto.createHash('sha1');
	shasum.update(word);
	return shasum.digest('hex');
};

var maxLength = 3;
var password = 'Hel';
var passHash = createHash(password);


var iterateChars = function(prefix) {
	var len = chars.length;
	for (var i = 0; i < len; ++i) {
		var word = prefix + chars[i];
		var sha1 = createHash(word);
		//console.log(time() + ' ' + word + ' = ' + sha1);
		if (sha1 === passHash) {
			console.log('Password found. Time used: ' + time() + ' ms');
			return;
		}
		if (word.length < maxLength) {
			iterateChars(word);
		}
	}
};


iterateChars('');
