import initApi from "./modules/api-cep.js";
import validaFormulario from "./modules/validacoes.js";

function initSearch() {
  document.querySelector("#formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    validaFormulario();
    initApi();
  });
}

initSearch();
