//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let sorteado = false;

function adicionarAmigo() {
    let amigo = document.querySelector('#amigo').value;
    if (amigo == '') {
        alert('Erro! Por favor, insira um nome válido.')
    } else {
        amigos.push(amigo);
        let lista = document.createElement('li');
        lista.innerHTML = amigo;        
         
        document.querySelector('#listaAmigos').appendChild(lista);
        document.querySelector('#amigo').value = '';
        document.querySelector('#resultado').innerHTML = '';
        sorteado = false;
     }
    
}

    function sortearAmigo() {
        if(amigos.length == 0 || sorteado) {
            alert('Digite um nome antes de sortear!');            
        } else {
        let amigosSorteados = amigos[parseInt(Math.random() * amigos.length)]
        document.querySelector('#resultado').innerHTML = 'O Seu Amigo Secreto Sorteado é: ' + amigosSorteados;
        amigos = [];
        sorteado = true; 
    }

        limparCampo();
    }

    function limparCampo() {
        lista = [];
        document.querySelector('#listaAmigos').innerHTML = '';
    }
