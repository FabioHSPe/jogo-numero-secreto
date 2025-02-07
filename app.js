//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeDeAmigo = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    let lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');

    if (nome == '') {
        alert('Insira um nome');

    } else {

        limparCampo();
        nomeDeAmigo.push(nome);   
        
        for (i = 0; i < nomeDeAmigo.length; ++i) {
        li.innerText = nomeDeAmigo[i];
        lista.appendChild(li);
        
      }
      
    }

}

function sortearAmigo() {
    if (nome == '') {
        alert('Insira um nome');
    } else {
        let amigoSecreto = nomeDeAmigo[Math.floor(Math.random() * nomeDeAmigo.length)];
        let amigo = document.querySelector('resultado');
        resultado.innerHTML = amigoSecreto;
        
    }
     
    limparLista();    
}

function limparLista() {

    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}