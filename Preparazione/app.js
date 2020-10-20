var express = require('express');
var cors= require ('cors');
var app = express(); 
app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/api/products', function (req, res) {
  //res.sendFile('products.json');
  res.sendFile(__dirname +'/products.json');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});