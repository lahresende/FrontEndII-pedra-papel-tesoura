let jogadorEscolha = 0;
let computadorEscolha = 0;
let jogadorPontos = 0;
let computadorPontos = 0;
function jogar(escolha) {
  jogadorEscolha = escolha;

  let resultMessage = document.getElementById("mensagens");

  computadorEscolha = Math.round(Math.random() * 2);

  document.getElementById("pedraComputador").style.opacity = 0.2;
  document.getElementById("papelComputador").style.opacity = 0.2;
  document.getElementById("tesouraComputador").style.opacity = 0.2;

  switch (computadorEscolha) {
    case 0:
      computadorEscolha = "pedra";
      break;
    case 1:
      computadorEscolha = "tesoura";
      break;
    case 2:
      computadorEscolha = "papel";
      break;
  }
  document.getElementById(`${computadorEscolha}Computador`).style.opacity = 1;

  switch (jogadorEscolha) {
    case "pedra":
      if (computadorEscolha == "tesoura") {
        resultMessage.innerHTML =
          "<h1> Você ganhou!! </h1> <p> Você escolheu pedra, e o computador escolheu tesoura.</p>";
        jogadorPontos++;
      } else if (computadorEscolha == "papel") {
        resultMessage.innerHTML =
          "<h1> Você perdeu! :( </h1> <p> Você escolheu pedra, e o computador escolheu papel.</p>";
        computadorPontos++;
      } else {
        resultMessage.innerHTML = "<h1> Empatou! </h1> <p> Você e o computador escolheu o mesmo movimento.";
      }

      break;

    case "tesoura":
      if (computadorEscolha == "papel") {
        resultMessage.innerHTML =
          "<h1> Você ganhou!! </h1> <p> Você escolheu tesoura, e o computador escolheu papel.</p>";
        jogadorPontos++;
      } else if (computadorEscolha == "pedra") {
        resultMessage.innerHTML =
          "<h1> Você perdeu! :( </h1> <p> Você escolheu tesoura, e o computador escolheu pedra.</p>";
        computadorPontos++;
      } else {
        resultMessage.innerHTML = "<h1> Empatou! </h1> <p> Você e o computador escolheu o mesmo movimento.";
      }

      break;

    case "papel":
      if (computadorEscolha == "pedra") {
        resultMessage.innerHTML =
          "<h1> Você ganhou!! </h1> <p> Você escolheu papel, e o computador escolheu pedra.</p>";
        jogadorPontos++;
      } else if (computadorEscolha == "tesoura") {
        resultMessage.innerHTML =
          "<h1> Você perdeu! :( </h1> <p> Você escolheu papel, e o computador escolheu tesoura.</p>";
        computadorPontos++;
      } else {
        resultMessage.innerHTML = "<h1> Empatou! </h1> <p> Você e o computador escolheu o mesmo movimento.";
      }

      break;
  }

  document.getElementById("jogadorPontos").innerHTML = jogadorPontos;
  document.getElementById("computadorPontos").innerHTML = computadorPontos;
}
