export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(event) {
      if (window.matchMedia('(min-width: 700px)').matches) {
        this.tooltipBox.style.top = `${event.pageY + 20}px`;
        this.tooltipBox.style.left = `${event.pageX + 20}px`;
      } else {
        this.tooltipBox.style.top = `${event.pageY + 30}px`;
        this.tooltipBox.style.left = `${event.pageX - 70}px`;
      }
    },
  };
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = element.getAttribute('aria-label');
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener('mouseleave', onMouseLeave);
    onMouseLeave.element = this;
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
