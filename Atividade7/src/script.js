function verificarTriangulo() {
    const a = parseFloat(document.getElementById("ladoA").value);
    const b = parseFloat(document.getElementById("ladoB").value);
    const c = parseFloat(document.getElementById("ladoC").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      resultado.innerText = "Por favor, insira apenas números válidos.";
      return;
    }
  
    if (Math.abs(b - c) < a && a < b + c &&
        Math.abs(a - c) < b && b < a + c &&
        Math.abs(a - b) < c && c < a + b) {
  
      if (a === b && b === c) {
        resultado.innerText = "É um triângulo EQUILÁTERO.";
      } else if (a !== b && b !== c && a !== c) {
        resultado.innerText = "É um triângulo ESCALENO.";
      } else {
        resultado.innerText = "É um triângulo ISÓSCELES.";
      }
  
    } else {
      resultado.innerText = "Os valores NÃO formam um triângulo.";
    }
  }
  