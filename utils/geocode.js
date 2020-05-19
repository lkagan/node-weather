const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibGthZ2FuMjAwMCIsImEiOiJja2FjeWc4M2EwNDN5MnlsNzdvZm8ycWl3In0.YKxOq-XUqCahkO35Tni-cg&limit=1';

    request({url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to geo service', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location.  Try another search.', undefined);
        } else {
            callback(
                undefined,
                {
                    longitude: response.body.features[0].center[0],
                    latitude: response.body.features[0].center[1],
                    location: response.body.features[0].place_name,
                }

            )
        }
    });
}

module.exports = geocode;