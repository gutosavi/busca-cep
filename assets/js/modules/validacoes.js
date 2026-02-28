export default function validaFormulario() {
  limpaErros();
  validaInput();
}

const form = document.querySelector("#formulario");

function validaInput() {
  const inputCidade = form.querySelector("#input-cidade");
  const nomeCidade = inputCidade.value;

  if (nomeCidade === "") {
    criaErro(inputCidade, "Uma cidade deve ser informada");
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
