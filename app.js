let listaNumSorteados = [];
let numLimite = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 0 e 10');
}

mensagemInicial()

function verChute() {
  let chute = document.querySelector('input').value;

  if (chute == numSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numSecreto) {
      exibirTextoNaTela('h1', 'ERROU!');
      exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
      exibirTextoNaTela('h1', 'ERROU!');
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo()
  }
}

function gerarNumAleatorio() {
  let numEscolhido = parseInt(Math.random() * numLimite + 1);
  let quantElementosNaLista = listaNumSorteados.length;
  
  if (quantElementosNaLista == numLimite) {
    listaDeNumSorteados = [];
  }

  if (listaNumSorteados.includes(numEscolhido)) {
    return gerarNumAleatorio();
  } else {
    listaNumSorteados.push(numEscolhido);
    console.log(listaNumSorteados);
    return numEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numSecreto = gerarNumAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}