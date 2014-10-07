// last-mod_spec.js

// Run with
// nodeunit last-mod_spec.js --reporter verbose

var lastMod = require('../last-mod');

exports.lastMod = function(test){
    test.expect(4);
	
	// Non existing file
	var non = lastMod('not-to-be-found.js');
	test.strictEqual(non, false, 'False returned when file not existing');
	
	// Existing file
	var yes = lastMod('LICENSE'); // Date object
	test.equal(yes instanceof Date, true, 'Date object returned when file exists');
	
	// Correct year and month
	test.equal(yes.getFullYear(), 2014, 'Year is matching');
	test.equal(yes.getMonth(), 8, 'Month is September');
	
    test.done();
};
