let listaDeNumerosSorteados = [];
let = numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um número 1 e 10');
}



    function verificarChute() {
        let = chute = document.querySelector('input').value;

        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('h1', 'O numero e menor'); 
        } else {
            exibirTextoNaTela('h1', 'O numero e maior');
        }
        tentativas++;
        limparCampo();

        }
    }

    function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == numeroLimite){
            listaDeNumerosSorteados = [];
        }
        
        if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
    
        } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
        }
        
    }

    function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
    }

    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        mensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }
