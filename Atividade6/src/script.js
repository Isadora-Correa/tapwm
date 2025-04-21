const form = document.getElementById('survey-form');
const resultados = document.getElementById('resultados');
const finalizarBtn = document.getElementById('finalizar');

let respostas = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const idade = parseInt(form.idade.value);
  const sexo = form.sexo.value;
  const opiniao = parseInt(form.opiniao.value);
  
  respostas.push({ idade, sexo, opiniao });
  alert("Resposta registrada!");
  form.reset();
});

finalizarBtn.addEventListener('click', calcularResultados);

function calcularResultados() {
    if (respostas.length === 0) {
      resultados.innerHTML = `<p>Nenhuma resposta registrada ainda.</p>`;
      return;
    }
  
    const idades = respostas.map(r => r.idade);
    const mediaIdade = idades.reduce((a, b) => a + b, 0) / idades.length;
    const maisVelha = Math.max(...idades);
    const maisNova = Math.min(...idades);
    const pessimo = respostas.filter(r => r.opiniao === 1).length;
  
    const otimo = respostas.filter(r => r.opiniao === 4).length;
    const bom = respostas.filter(r => r.opiniao === 3).length;
    const porcentagemOtimo = (otimo / respostas.length * 100).toFixed(2);
    const porcentagemBom = (bom / respostas.length * 100).toFixed(2);
  
    const homens = respostas.filter(r => r.sexo === 'masculino').length;
    const mulheres = respostas.filter(r => r.sexo === 'feminino').length;
    const outros = respostas.filter(r => r.sexo === 'outros').length;
  
    resultados.innerHTML = `
      <h2>Resultados:</h2>
      <p><strong>Média de idade:</strong> ${mediaIdade.toFixed(2)}</p>
      <p><strong>Idade da pessoa mais velha:</strong> ${maisVelha}</p>
      <p><strong>Idade da pessoa mais nova:</strong> ${maisNova}</p>
      <p><strong>Quantidade que respondeu 'Péssimo':</strong> ${pessimo}</p>
      <p><strong>Porcentagem que respondeu 'Ótimo':</strong> ${porcentagemOtimo}%</p>
      <p><strong>Porcentagem que respondeu 'Bom':</strong> ${porcentagemBom}%</p>
      <p><strong>Mulheres:</strong> ${mulheres}, <strong>Homens:</strong> ${homens}, <strong>Outros:</strong> ${outros}</p>
    `;
  }
  