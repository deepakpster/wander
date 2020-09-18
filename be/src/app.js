const express = require('express');
const request = require('superagent');
var cors = require('cors');

const BASE_API = `http://covid19-india-adhikansh.herokuapp.com`;
const MOHFW_API = `https://www.mohfw.gov.in/data`

const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
   res.status(200).send('hello world!');
});

app.get('/summary', (req, res) => {
   request
   .get(`${BASE_API}/summary`)
   .then(data => {
      res.status(200).send(JSON.parse(data.text));
   })
   .catch(err => {
      res.status(500).send(err);
   });
});

app.get('/states', (req, res) => {
   request
   .get(`${BASE_API}/states`)
   .then(data => {
      res.status(200).send(JSON.parse(data.text));
   })
   .catch(err => {
      res.status(500).send(err);
   });
});

app.get('/state', (req, res) => {
   const q = req.query.q;
   request
   .get(`${BASE_API}/state/${q}`)
   .then(data => {
      res.status(200).send(JSON.parse(data.text));
   })
   .catch(err => {
      res.status(500).send(err);
   });
});

app.get('/mohfw', (req, res) => {
   const q = req.query.q;
   request
   .get(`${MOHFW_API}/datanew.json`)
   .then(data => {
      res.status(200).send(JSON.parse(data.text));
   })
   .catch(err => {
      res.status(500).send(err);
   });
});

module.exports = app;