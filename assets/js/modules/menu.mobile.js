import { outsideClick } from './dropdown-menu.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  if (menuButton) {
    function openMenu(e) {
      menuList.classList.toggle('ativo');
      menuButton.classList.toggle('ativo');
      e.preventDefault();
      e.stopPropagation();
      outsideClick(menuList);
    }
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
