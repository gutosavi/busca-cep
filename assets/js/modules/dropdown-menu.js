export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach((item) => {
    ['click', 'touchstart'].forEach((useEvent) => {
      item.addEventListener(useEvent, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.toggle('ativo');
    outsideClick(e.currentTarget);
  }
}

export function outsideClick(menuAtivo) {
  const html = document.documentElement;
  html.addEventListener('click', handleOutsideClick);

  function handleOutsideClick() {
    html.removeEventListener('click', handleOutsideClick);
    menuAtivo.classList.remove('ativo');
  }
}
