let express = require('express');
let app=express(); // executando o express  
app.set('view engine', 'ejs'); // setando a engine de template

app.set('views','./app/views'); //diretório onde os arquivos estão localizados 
module.exports = app;