const request = require('request')

const forecast = (latitude, longtitude, callback) => {
  const url = 'https://api.darksky.net/forecast/531f79f723c96e1d27f3c5a554a35297/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longtitude) + '?units=si'
  
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('cannot connect')
    } else if (body.error) {
      callback('cant find location')
    } else {
      callback(undefined, body.daily.data[0].summary + 'it is currently '
          + body.currently.temperature
          + ' degrees, with ' + body.currently.precipProbability
          + '% chance of rain.'
      )
    }
  })
}

module.exports = forecast;