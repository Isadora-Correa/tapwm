// app/config/server.js (CORRIGIDO)

let express = require('express');
let bodyParser = require('body-parser');
let consign = require('consign');

let app = express(); 
app.set('view engine', 'ejs'); 
app.set('views','./app/views');

// 1. O Body-Parser deve vir ANTES do consign
app.use(bodyParser.urlencoded({extended: true})); 

// 2. Carregue tudo com UMA SÓ chamada do consign
consign({cwd: 'app'}) 
 .include('routes')
 .then('config/dbConnection.js')
 .then('models')
 .into(app); 

module.exports = app;