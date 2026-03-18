export default async function initApi() {
  const nomeCidade = document.getElementById('input-cidade').value;
  const uf = document.getElementById('input-uf').value;
  const logradouro = document.getElementById('input-logradouro').value;
  const bairro = document.getElementById('input-bairro').value;

  limpaResultado();
  setMsgErro('');

  const apiURL = `https://viacep.com.br/ws/${encodeURI(uf)}/${encodeURI(nomeCidade)}/${encodeURI(logradouro)}/json/`;

  try {
    const results = await fetch(apiURL);
    const json = await results.json();

    const filtrado = bairro
      ? json.filter((item) =>
          item.bairro.toLowerCase().includes(bairro.toLowerCase()),
        )
      : json;
    if (filtrado.length === 0) {
      setMsgErro('*Nenhum resultado encontrado*');
      return;
    }
    mostraResultado(filtrado);
  } catch (error) {
    console.error('Erro na requisição:', error);
    setMsgErro('*Nenhum resultado encontrado*');
  }
}

function mostraResultado(json) {
  const form = document.querySelector('#formulario');

  const resultadoExistente = form.querySelector('.resultado-busca');
  if (resultadoExistente) resultadoExistente.remove();

  const div = document.createElement('div');
  div.classList.add('resultado-busca');

  json.forEach((item) => {
    div.innerHTML += `
    <div class="res-item">
    <p><strong>CEP:</strong> ${item.cep}</p>
    <p><strong>Logradouro:</strong> ${item.logradouro}</p>
    <p><strong>Bairro:</strong> ${item.bairro}</p>
    <p><strong>Complemento:</strong> ${item.complemento}</p>
    </div>
    `;
  });
  form.appendChild(div);
}

function setMsgErro(msg) {
  const msgErro = document.querySelector('.msg-erro');
  if (msgErro) msgErro.innerHTML = msg;
}

function limpaResultado() {
  const resultado = document.querySelector('.resultado-busca');
  if (resultado) resultado.remove();
}
