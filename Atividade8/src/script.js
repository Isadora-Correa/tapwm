// 1. Retornar o maior de três números
function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
  }
  
  function mostrarMaior() {
    const a = parseFloat(document.getElementById("n1").value);
    const b = parseFloat(document.getElementById("n2").value);
    const c = parseFloat(document.getElementById("n3").value);
    document.getElementById("maiorResultado").textContent = "Maior: " + maiorNumero(a, b, c);
  }
  
  // 2. Retornar os números em ordem crescente
  function ordenarNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
  }
  
  function mostrarOrdenados() {
    const a = parseFloat(document.getElementById("o1").value);
    const b = parseFloat(document.getElementById("o2").value);
    const c = parseFloat(document.getElementById("o3").value);
    document.getElementById("ordenadoResultado").textContent = "Ordenados: " + ordenarNumeros(a, b, c).join(", ");
  }
  
  // 3. Verificar se é palíndromo
  function ehPalindromo(str) {
    const limpa = str.toLowerCase().replace(/\s/g, '');
    const invertida = limpa.split('').reverse().join('');
    return limpa === invertida;
  }
  
  function verificarPalindromo() {
    const palavra = document.getElementById("palavra").value;
    const resultado = ehPalindromo(palavra) ? "É um palíndromo!" : "Não é um palíndromo.";
    document.getElementById("palindromoResultado").textContent = resultado;
  }
  
  // 4. Verificar se é subconjunto
  function ehSubconjunto(str1, str2) {
    if (!str1 || !str2) return "erro";
  
    for (let char of str2.toLowerCase()) {
      if (!str1.toLowerCase().includes(char)) {
        return "não é um subconjunto";
      }
    }
    return "é um subconjunto";
  }
  
  function verificarSubconjunto() {
    const palavra1 = document.getElementById("palavra1").value;
    const palavra2 = document.getElementById("palavra2").value;
    const resultado = ehSubconjunto(palavra1, palavra2);
    document.getElementById("subconjuntoResultado").textContent = resultado;
  }
  