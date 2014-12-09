// measure-sizes.js
var request = require('request');
var cheerio = require('cheerio');

var url = 'http://npmjs.org';

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {

    console.log(body);
    var $ = cheerio.load(body);
    var scripts = $.find('script');

    console.log(scripts);
  }
});

