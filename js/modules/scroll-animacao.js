export default function initAnimateScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowHalf = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowHalf;
      if (sectionTop < 0) {
        section.classList.add('animar');
      } else if (section.classList.contains('animar')) {
        section.classList.remove('animar');
      }
    });
  }
  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
