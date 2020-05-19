const request = require('postman-request');
const geocode = require('./utils/geocode');

// const url = 'http://api.weatherstack.com/current?access_key=255fbaa3da49c33e8de8f41d931d9915&query=37.8267,-122.4233&units=f';

// request({ url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         const current = response.body.current;
//         const message = current.weather_descriptions[0] +
//             `. It is currently ${current.temperature} degrees out.  It feels ` +
//             `like ${current.feelslike} degrees out.`;
//         console.log(message);
//     }
// });



geocode('Palm Beach', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});