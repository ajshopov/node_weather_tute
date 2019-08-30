const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const searchInput = process.argv[2];

if (!searchInput) {
  console.log('please provide a location');
} else {
  geocode(searchInput, (error, { latitude, longtitude, location }) => {
    if (error) { return console.log('error', error) };

    forecast(latitude, longtitude, (error, forecastData) => {
      if (error) { return console.log('Error', error) };

      console.log(location)
      console.log(forecastData)
    });
  });
}