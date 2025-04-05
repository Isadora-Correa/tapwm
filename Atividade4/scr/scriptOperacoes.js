var primeiroNumero = parseFloat(prompt("Qual é o 1º número?"));
var segundoNumero = parseFloat(prompt("Qual é o 2º número?"));

var soma = primeiroNumero + segundoNumero;
var subtracao = primeiroNumero - segundoNumero;
var produto = primeiroNumero * segundoNumero;

var divisao, resto;

if (segundoNumero !== 0) {
    divisao = primeiroNumero / segundoNumero;
    resto = primeiroNumero % segundoNumero;
} else {
    divisao = "Erro! Divisão por zero.";
    resto = "Erro! Não existe resto na divisão por zero.";
}

alert("Soma: " + soma.toFixed(0));
alert("Subtração: " + subtracao.toFixed(0));
alert("Multiplicação: " + produto);
alert("Divisão: " + divisao);
alert("Resto Inteiro: " + resto);
