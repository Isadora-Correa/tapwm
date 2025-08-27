//Função para imprimir a primeira parte
function Parte1(){
    for (var i=1; i<= 10;i++){
        console.log("Primeira parte: " + i);
    }
}
setTimeout(Parte1, 2000); //para atrasar
const fs = require("fs").promises; //Importa a versão com Promises
fs.readFile('file.txt', 'utf8') //O 'utf8' evitar a necessidade de .toString()
.then(data => {
    const registros = data.split('\n');
    registros.forEach((registro, index) => {
        console.log("   Segunda parte: " + registro + " " + index);
    });
})
.catch(err => {
    console.error("Erro ao ler o arquivo: ", err);
});