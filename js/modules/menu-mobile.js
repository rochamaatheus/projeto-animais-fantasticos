import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="lista"]');
  if (menuButton) {
    ['touchstart', 'click'].forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
  function openMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    menuList.classList.add('active');
    menuButton.classList.add('active');
    menuButton.setAttribute('aria-expanded', 'true');
    outsideClick(menuList, ['touchstart', 'click'], () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  }
}
