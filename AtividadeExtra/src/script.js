function executarExercicio1() {
    const x = Number(document.getElementById('num1').value);
    const y = Number(document.getElementById('num2').value);
    const z = Number(document.getElementById('num3').value);
  
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
      document.getElementById('resultado1').innerHTML = 'Por favor, preencha os 3 números corretamente.';
      return;
    }
  
    const soma = x + y + z;
    const quadradoPrimeiro = x ** 2;
    const quadradoSegundo = y ** 2;
  
    document.getElementById('resultado1').innerHTML = `
      A <b>soma</b> dos três números é: <b>${soma}</b><br>
      O <b>quadrado do primeiro</b> (${x}) é: <b>${quadradoPrimeiro}</b><br>
      O <b>quadrado do segundo</b> (${y}) é: <b>${quadradoSegundo}</b>
    `;
  }
  
  function executarExercicio2() {
    const letras = [
      document.getElementById('letra1').value,
      document.getElementById('letra2').value,
      document.getElementById('letra3').value,
      document.getElementById('letra4').value,
      document.getElementById('letra5').value
    ];
  
    if (letras.some(l => l.length !== 1 || !/^[a-zA-Z]$/.test(l))) {
      document.getElementById('resultado2').innerHTML = 'Digite 5 letras válidas (A-Z).';
      return;
    }
  
    const palavras = [];
    function permutacoes(arr, prefixo = '') {
      if (prefixo.length === 5) {
        if (!palavras.includes(prefixo)) {
          palavras.push(prefixo);
        }
        return;
      }
  
      for (let i = 0; i < arr.length; i++) {
        const novaArr = [...arr];
        novaArr.splice(i, 1);
        permutacoes(novaArr, prefixo + arr[i]);
        if (palavras.length >= 10) break;
      }
    }
  
    permutacoes(letras);
  
    document.getElementById('resultado2').innerHTML = `
      <b>10 palavras formadas:</b> ${palavras.slice(0, 10).join(', ')}
    `;
  }
  