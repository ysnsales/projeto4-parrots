let cartasPossiveis = ['imagens/bobrossparrot.gif', 'imagens/bobrossparrot.gif', 
'imagens/explodyparrot.gif', 'imagens/explodyparrot.gif',
'imagens/fiestaparrot.gif', 'imagens/fiestaparrot.gif', 
'imagens/metalparrot.gif', 'imagens/metalparrot.gif', 
'imagens/revertitparrot.gif', 'imagens/revertitparrot.gif', 
'imagens/tripletsparrot.gif', 'imagens/tripletsparrot.gif', 
'imagens/unicornparrot.gif','imagens/unicornparrot.gif'];

let cartasEscolhidas = [];


function virarcarta(cartaclicada){

    cartaclicada.classList.toggle('virar');
}

let novaCarta;
let listaCartas;
let posicao = [];
let cartasBagunçadas = [];


function inicio() {
    let quantidade = Number(prompt('Com quantas cartas deseja jogar?'));
  
if (quantidade >= 4 && quantidade <= 14 && quantidade % 2 === 0) {
    for (let i=0; i<=(quantidade-1); i++) {
        cartasEscolhidas.push(cartasPossiveis[i]);
        console.log(cartasEscolhidas)
        
        posicao.push(i);
        console.log(posicao);
    }
    for (let j = 0; j < quantidade; j++) {
              let indice = posicao[Math.floor(Math.random()*posicao.length)];
              console.log(indice);
              cartasBagunçadas.push(indice)
              posicao.splice(posicao.indexOf(indice), 1)


              novaCarta = `<li class="card" onclick="virarcarta(this)">
        <div class="front-face face" >
          <img src="imagens/back.png"/>
        </div>
        <div class="back-face face">
          <img src=${cartasEscolhidas[cartasBagunçadas[j]]} />
        </li> `
        

        listaCartas  = document.querySelector('.cartas').innerHTML;
        console.log(listaCartas);
        listaCartas = listaCartas + novaCarta;
        document.querySelector('.cartas').innerHTML = listaCartas;
            }

        }     


else {
    alert('Número inválido');
    inicio();
}
}

inicio();