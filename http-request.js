const https = require('https');
const url = 'https://api.darksky.net/forecast/531f79f723c96e1d27f3c5a554a35297/-38,145?units=si'

const request = https.request(url, (response) => {
  let data = ''
  // data coming in
  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })
  // finished
  response.on('end', () => {
    console.log(data)
    const body = JSON.parse(data)
    console.log(body)
  })

})

request.on('error', (error) => {
  console.log(error)
})

request.end()