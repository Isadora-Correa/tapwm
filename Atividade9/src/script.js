function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) return "Magreza - Obesidade grau 0";
  if (imc < 25) return "Normal - Obesidade grau 0";
  if (imc < 30) return "Sobrepeso - Obesidade grau I";
  if (imc < 40) return "Obesidade - Obesidade grau II";
  return "Obesidade Grave - Obesidade grau III";
}

function mostrarResultado() {
  let altura = document.getElementById("altura").value.replace(",", ".");
  let peso = document.getElementById("peso").value.replace(",", ".");

  altura = parseFloat(altura);
  peso = parseFloat(peso);

  if (isNaN(altura) || isNaN(peso)) {
    document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  const imc = calcularIMC(peso, altura);
  const classificacao = classificarIMC(imc);

  document.getElementById("resultado").innerText = `Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`;
}
