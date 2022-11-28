export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';
  function activeAccordion(item) {
    item.classList.toggle(activeClass);
    item.nextElementSibling.classList.toggle(activeClass);
  }
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    accordionList.forEach((item) => {
      item.addEventListener('click', () => {
        activeAccordion(item);
      });
    });
  }
}
