let jogosAlugados = 0;

function contaExibirJogosAlugados() {
    console.log(`Total de Jogos Alugados: ${jogosAlugados}`)
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    let mensagem = imagem.classList.contains('dashboard__item__img--rented') 
        ? 'Tem certeza que deseja devolver este jogo?' 
        : 'Tem certeza que deseja alugar este jogo?';
    
    if (confirm(mensagem)) {
        if (imagem.classList.contains('dashboard__item__img--rented')) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
     } else {
            imagem.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver';
            botao.classList.add('dashboard__item__button--return');
            jogosAlugados++;
        }  
        
        contaExibirJogosAlugados();

    }
    document.addEventListener('DOMContentLoaded', function(){
        jogosAlugados = document.querySelectorAll('dashboard__item__img--rented').length;
        contaExibirJogosAlugados();
    })
}