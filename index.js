const express = require('express')
const app = express()
const conf = require('./conf')
const axios = require('axios')
const md5 = require('md5')
const path = require('path')

app.use(express.static('public'))

const getApiParams = () => {
  const timestamp = new Date().getTime()
  const toHash =  `${timestamp}${conf.API_PRIVATE}${conf.API_PUBLIC}`
  const hash = md5(toHash)
  return {
    ts: timestamp,
    apikey: conf.API_PUBLIC,
    hash: hash
  }
}


app.get('/api/characters', function (req, res) {
  axios.get(`${conf.BASE_URL}/v1/public/characters`, {
    params: getApiParams()
  })
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
    res.send(error);
  });
})

app.get('/api/characters/:id', function (req, res) {
  axios.get(`${conf.BASE_URL}/v1/public/characters/${req.params.id}`, {
    params: getApiParams()
  })
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
    res.send(error);
  });
})


app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})