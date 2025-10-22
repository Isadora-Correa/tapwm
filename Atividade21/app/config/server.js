let express = require('express');
let consign = require('consign');
let app=express(); // executando o express  
app.set('view engine', 'ejs'); // setando a engine de template

app.set('views','./app/views'); //diretório onde os arquivos estão localizados 
consign().include('app/routes').into(app); //incluindo as rotas no app


consign({cwd: 'app'}) //para incluir a pasta app
    .include('routes')
    .then('config/dbConnection.js') //incluindo a conexão com o banco
    .into(app);
module.exports = app;