const request = require('request')

const geocode = (address, callback) => {
  const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?types=place&access_token=pk.eyJ1IjoiYWpzaG9wb3YiLCJhIjoiY2p6dXNqN2xzMDhuMzNnbXJqZDh1ZHJhYSJ9.M603Fn2rK4KTNKjKPBcb_A&limit=1"

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('unable to connect')
    } else if (!body.features.length) {
      callback('cant find location')
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longtitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode;