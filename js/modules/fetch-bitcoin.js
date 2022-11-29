export default function fetchBTC(url, target) {
  fetch(url)
    .then(r => r.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(5);
    })
    .catch(erro => console.log(Error(erro)));
}
