var request = require('request');
var util = require('util');
var keysJSON = require('./keys.json');
console.log(keysJSON.reittiopasApiKey);
exports.lines = function(req, res) {
    request.get("http://api.reittiopas.fi/hsl/prod/?request=stop&code=1528&"+keysJSON.reittiopasApiKey, function(err, response, body) {
        console.log(body);
        res.json(body);

    });

};