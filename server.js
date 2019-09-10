const express = require('express'); // 1º
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routes'); //Archivo de rutas

//ESto viene de db.js
db('mongodb://user:1234@cluster0-shard-00-00-1oend.mongodb.net:27017,cluster0-shard-00-01-1oend.mongodb.net:27017,cluster0-shard-00-02-1oend.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
 
var app = express(); // 2º
app.use(bodyParser.json());
router(app); //Nuestra app usará las rutas definidas


app.use('/app', express.static('public')) //Toda la información de nuestra app
app.listen(3000);
console.log('La app está escuchando en http://localhost:3000')
