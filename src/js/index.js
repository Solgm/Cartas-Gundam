const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

cartoes.forEach(cartao => {
  cartao.addEventListener("click", function() {
    const cartaVirada = cartao.querySelector(".carta-virada");
    cartao.classList.toggle("virar");
    cartaVirada.classList.toggle("mostrar-fundo-carta");
    const descricao = cartao.querySelector(".descricao");
    descricao.classList.toggle("esconder");
  });
});

function atualizarBotoes() {
  if (cartaoAtual === 0) {
    btnVoltar.style.visibility = "hidden";
  } else {
    btnVoltar.style.visibility = "visible";
  }

  if (cartaoAtual === cartoes.length - 1) {
    btnAvancar.style.visibility = "hidden";
  } else {
    btnAvancar.style.visibility = "visible";
  }
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;
  esconderCartaoSelecionado();
  cartaoAtual++;
  mostrarCartao(cartaoAtual);
  atualizarBotoes();
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;
  esconderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
  atualizarBotoes();
});

function mostrarCartao(cartaoAtual) {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

atualizarBotoes();
