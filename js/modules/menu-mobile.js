import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, activeClass, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = activeClass;

    // Define os argumentos padrões caso não passados
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    this.menuButton.setAttribute('aria-expanded', 'true');
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
      this.menuButton.setAttribute('aria-expanded', 'false');
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((userEvent) => {
      this.menuButton.addEventListener(userEvent, this.openMenu);
    });
  }

  init() {
    if (this.menuButton) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
