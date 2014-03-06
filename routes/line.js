var request = require('request');
var util = require('util');
var keysJSON = require('./keys.json');
exports.lines = function(req, res) {
    var latitude = req.query.latitude;
    var longitude = req.query.longitude;
    request.get("http://api.reittiopas.fi/hsl/prod/?request=stops_area&epsg_in=4326&epsg_out=4326&center_coordinate="+longitude+","+latitude+"&"+keysJSON.reittiopasApiKey, function(err, response, body) {
        if(body){
            res.json(body);
        }else{
            res.send(404);
        }


    });

};