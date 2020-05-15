const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=255fbaa3da49c33e8de8f41d931d9915&query=37.8267,-122.4233';

request({ url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});

