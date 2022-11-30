export default class ScrollAnima {
  constructor(sections, windowHalf) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * windowHalf;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.windowHalf;
      if (sectionTop < 0) {
        section.classList.add('animar');
      } else if (section.classList.contains('animar')) {
        section.classList.remove('animar');
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
    return this;
  }
}
