import initApi from "./modules/api-cep.js";
import validaFormulario from "./modules/validacoes.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu.mobile.js";

function initSearch() {
  document.querySelector("#formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    validaFormulario();
    initApi();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initDropdownMenu();
  initMenuMobile();
  initSearch();
});
