const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if (process.argv.length < 3) {
    return console.error('Please provide a location for a weather forcecast');
}

geocode(process.argv[2], (error, data) => {
    if (error) {
        return console.log(error);
    }

    forecast(data.longitude, data.latitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }

        console.log(data.location);
        console.log(forecastData);
    });
});
