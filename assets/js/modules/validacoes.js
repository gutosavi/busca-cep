export default function validaFormulario() {
  limpaErros();
  validaInput();
}

const form = document.querySelector("#formulario");

function validaInput() {
  const inputCidade = form.querySelector("#input-cidade");
  const inputLogradouro = form.querySelector("#input-logradouro");
  const inputUf = form.querySelector("#input-uf");
  const nomeCidade = inputCidade.value;
  const nomeLogradouro = inputLogradouro.value;
  const nomeEstado = inputUf.value;

  if (!nomeLogradouro || !nomeCidade || !nomeEstado) {
    criaErro(inputLogradouro, "Logradouro deve ser informado");
    criaErro(inputCidade, "Cidade deve ser informada");
    criaErro(inputUf, "Estado deve ser informado");
    return false;
  }

  return true;
}

function criaErro(campo, msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  div.classList.add("erro-input");
  form.appendChild(div);
  campo.insertAdjacentElement("afterend", div);
}

function limpaErros() {
  document.querySelectorAll(".erro-input").forEach((erro) => erro.remove());
}
