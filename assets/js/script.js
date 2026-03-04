import initApi from "./modules/api-cep.js";
import validaFormulario from "./modules/validacoes.js";
import initDropdownMenu from "./modules/dropdown-menu.js";

function initSearch() {
  document.querySelector("#formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    validaFormulario();
    initApi();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initDropdownMenu();
  initSearch();
});
