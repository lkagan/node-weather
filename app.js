const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=255fbaa3da49c33e8de8f41d931d9915&query=37.8267,-122.4233&units=f';

request({ url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service');
    } else if (response.body.error) {
        console.log('Unable to find location');
    } else {
        const current = response.body.current;
        const message = current.weather_descriptions[0] +
            `. It is currently ${current.temperature} degrees out.  It feels ` +
            `like ${current.feelslike} degrees out.`;
        console.log(message);
    }
});

const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGthZ2FuMjAwMCIsImEiOiJja2FjeWc4M2EwNDN5MnlsNzdvZm8ycWl3In0.YKxOq-XUqCahkO35Tni-cg&limit=1';

request({ url: locationUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to geo service');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location, try with different search term.');
    } else {
        const [long, lat] = response.body.features[0].center;
        console.log(lat, long);
    }
});

