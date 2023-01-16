let cartasPossiveis = ['imagens/bobrossparrot.gif', 'imagens/bobrossparrot.gif', 
'imagens/explodyparrot.gif', 'imagens/explodyparrot.gif',
'imagens/fiestaparrot.gif', 'imagens/fiestaparrot.gif', 
'imagens/metalparrot.gif', 'imagens/metalparrot.gif', 
'imagens/revertitparrot.gif', 'imagens/revertitparrot.gif', 
'imagens/tripletsparrot.gif', 'imagens/tripletsparrot.gif', 
'imagens/unicornparrot.gif','imagens/unicornparrot.gif'];

let cartasEscolhidas = [];
let contador = 0;


let click1;
let click2;

function virarcarta(cartaclicada){

    cartaclicada.classList.toggle('virar');

    contador = contador + 1;
    console.log(contador);
    if (click1 === undefined){
    click1 = cartaclicada.innerHTML; 
    }

    else if (click1 !== undefined && click2 === undefined){
        click2 = cartaclicada.innerHTML;
        //cartaclicada.classList.add('disabled');

        if (click1 === click2){
            mantervirada();
        }
        else {
          setTimeout(desvirar, 1000);

        }

        let site = document.querySelector('.cartas');
         // site.classList.toggle('disabledSite');
         // setTimeout(bloqclick, 1000);
    }
}

function desvirar(){
    let colecao = document.getElementsByClassName('virar');
    let desvira1 = colecao[0];
    let desvira2 = colecao[1];
    desvira1.classList.remove('virar');
    desvira2.classList.remove('virar');
    click1 = undefined;
    click2 = undefined;
    colecao = [];
}

function mantervirada(){
    let colecao = document.getElementsByClassName('virar');
    let vira1 = colecao[0];
    let vira2 = colecao[1];
   
    vira1.classList.remove('virar');
    vira2.classList.remove('virar');
    vira1.classList.add('fixar', 'disabled');
    vira2.classList.add('fixar' , 'disabled');
    click1 = undefined;
    click2 = undefined;
    colecao = [];
   

    let habilitarclick = document.getElementsByClassName('disabled');
}


let novaCarta;
let listaCartas;
let posicao = [];
let cartasBagunçadas = [];

function inicio() {
    quantidade = Number(prompt('Com quantas cartas deseja jogar?'));
if (quantidade >= 4 && quantidade <= 14 && quantidade % 2 === 0) {
    for (let i=0; i<=(quantidade-1); i++) {
        cartasEscolhidas.push(cartasPossiveis[i]);
        
        posicao.push(i);
    }
    for (let j = 0; j < quantidade; j++) {
              let indice = posicao[Math.floor(Math.random()*posicao.length)];
              cartasBagunçadas.push(indice)
              posicao.splice(posicao.indexOf(indice), 1)


              novaCarta = `<li class="card" id=${j} onclick="virarcarta(this)">
        <div class="front-face face" >
          <img src="imagens/back.png"/>
        </div>
        <div class="back-face face">
          <img src=${cartasEscolhidas[cartasBagunçadas[j]]} />
        </li> `
        

        listaCartas  = document.querySelector('.cartas').innerHTML;
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