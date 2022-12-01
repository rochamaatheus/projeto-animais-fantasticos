export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  tempoDefinido() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  horarioComputador() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  abertoOuFechado() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = this.horarioAgora >= this.horarioSemana[0]
      && this.horarioAgora < this.horarioSemana[1];

    return semanaAberto && horarioAberto;
  }

  addAberto() {
    this.funcionamento.classList.add(this.activeClass);
  }

  init() {
    this.tempoDefinido();
    this.horarioComputador();
    if (this.abertoOuFechado()) {
      this.addAberto();
    }
    return this;
  }
}
