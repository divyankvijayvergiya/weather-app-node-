const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=%20?address=${encodedAddress}&key=AIzaSyB89-Tp2VXfG5XiW_ktBYucyFs1SdegWeE`,
    json: true
  }, (error, response, body) =>{
    if(error){
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK'){
      callback(undefined, {
        Address: body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      });
    }

  });

};

module.exports.geocodeAddress = geocodeAddress;
