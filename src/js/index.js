/*Este codigo foi feito com o intuito de ESTUDO, então haverão comentarios para analise futura.

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
   - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista 
     - passo 4 - buscar o cartão que esta selecionado e esconder*/
     
//PASSO 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;
// objeto.metodo(objeto ja existente), este comando vai mostrar informações importantes.

//PASSO 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  //PASSO 4
  EsconderCartaoSelecionado();

  //PASSO 3
  cartaoAtual++;
  MostrarCartao();
});

//OBJETIVO 2 - Quando clicar na seta voltar, mostra o cartão anteriro da lista.
btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

  cartaoAtual--;
  MostrarCartao();
});
function MostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function EsconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
