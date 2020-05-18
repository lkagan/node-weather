const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=255fbaa3da49c33e8de8f41d931d9915&query=37.8267,-122.4233&units=f';

request({ url, json: true }, (error, response) => {
    const current = response.body.current;
    const message = current.weather_descriptions[0] +
        `. It is currently ${current.temperature} degrees out.  It feels ` +
        `like ${current.feelslike} degrees out.`;
    console.log(message);
});

const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGthZ2FuMjAwMCIsImEiOiJja2FjeWc4M2EwNDN5MnlsNzdvZm8ycWl3In0.YKxOq-XUqCahkO35Tni-cg&limit=1';

request({ url: locationUrl, json: true }, (error, response) => {
    const [lat, long] = response.body.features[0].center;
    console.log(lat, long);
});

