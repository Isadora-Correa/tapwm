var primeiraNota;
var segundaNota;
var terceiraNota;
var resultado;

primeiraNota = prompt("Qual é a sua 1º nota?");
segundaNota = prompt("Qual é a sua 2º nota?");
terceiraNota = prompt("Qual é a sua 3º nota?");

resultado = (parseFloat(primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota))/3;

alert("A média é de: "+resultado.toFixed(2));
