import initApi from "./modules/api-cep.js";
import validaFormulario from "./modules/validacoes.js";

// const nomeCidade = document.querySelector("#input-cidade");

function initSearch() {
  document.querySelector("#formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    validaFormulario();
    initApi();
  });
}

initSearch();
