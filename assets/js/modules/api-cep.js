import initValid from "./validacoes.js";

export default async function initApi() {
  const nomeCidade = document.getElementById("input-cidade").value;
  const uf = document.getElementById("input-uf").value;
  const logradouro = document.getElementById("input-logradouro").value;
  const bairro = document.getElementById("input-bairro").value;

  const apiURL = `https://viacep.com.br/ws/${uf}/${nomeCidade}/${logradouro}/json/`;

  try {
    const results = await fetch(apiURL);
    const json = await results.json();

    const filtrado = bairro
      ? json.filter((item) =>
          item.bairro.toLowerCase().includes(bairro.toLowerCase()),
        )
      : json;

    mostraResultado(filtrado);
  } catch (error) {
    console.log("Erro", error);
  }
}

function mostraResultado(json) {
  const form = document.querySelector("#formulario");
  const div = document.createElement("div");
  div.classList.add("resultado-busca");
  form.appendChild(div);

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
}
