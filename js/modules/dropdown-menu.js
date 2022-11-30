import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, activeClass, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = activeClass;

    // Define os argumentos padrões caso não passados
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdownMenu e adiciona a função que observa
  // o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao menu
  addDropdownMenuEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  // Inicia o código checando se dropdownMenus existe
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvents();
    }
    return this;
  }
}
