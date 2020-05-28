const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if (process.argv.length < 3) {
    return console.error('Please provide a location for a weather forcecast');
}

geocode(process.argv[2], (error, { longitude, latitude, location } = {}) => {
    if (error) {
        return console.log(error);
    }

    forecast(longitude, latitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }

        console.log(location);
        console.log(forecastData);
    });
});
