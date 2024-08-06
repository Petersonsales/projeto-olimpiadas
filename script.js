let mostrarResposta = false;
let mostrarSegundaResposta = false;
let mostrarTerceiraResposta = false

function toggleOrigem() {
  const lista = document.querySelector(".lista1");
  const botao = lista.querySelector("button");

  if (mostrarResposta) {
    botao.innerHTML = "Qual a origem das Olimpíadas ?";
    mostrarResposta = false;
  } else {
    botao.innerHTML =
      "As Olimpíadas surgiram na Grécia Antiga, por volta de 776 a. C., na cidade de Olímpia.";
    mostrarResposta = true;
  }
}

function toggleSimbolos() {
  const lista2 = document.querySelector(".lista2");
  const botao = lista2.querySelector("button");

  if (mostrarSegundaResposta) {
    botao.innerHTML = "Qual são os símbolos olimpicos?";
    mostrarSegundaResposta = false;
  } else {
    botao.innerHTML = "Os símbolos são: os aros, a tocha olímpica e o mascote.";
    mostrarSegundaResposta = true;
  }
}

function toglleAno() {
  const lista3 = document.querySelector(".lista3");
  const botao = lista3.querySelector("button");

  if (mostrarTerceiraResposta) {
    botao.innerHTML = "Em que ano ocorreu a primeira edição das olimpíadas?";
    mostrarTerceiraResposta = false;
  } else {
    botao.innerHTML = "A primeira edição dos jogos olímpicos modernos foi realizada na cidade de Atenas, em 1896.";
    mostrarTerceiraResposta = true;
  }
}
