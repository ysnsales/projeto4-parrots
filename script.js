let cartasPossiveis = ['imagens/bobrossparrot.gif', 'imagens/bobrossparrot.gif', 
'imagens/explodyparrot.gif', 'imagens/explodyparrot.gif',
'imagens/fiestaparrot.gif', 'imagens/fiestaparrot.gif', 
'imagens/metalparrot.gif', 'imagens/metalparrot.gif', 
'imagens/revertitparrot.gif', 'imagens/revertitparrot.gif', 
'imagens/tripletsparrot.gif', 'imagens/tripletsparrot.gif', 
'imagens/unicornparrot.gif','imagens/unicornparrot.gif'];

let cartasEscolhidas = [];
let contador = 0;
let contadorAcertos = 0;


let click1;
let click2;

let site = document.querySelector('.cartas');

function virarcarta(cartaclicada){

    cartaclicada.classList.toggle('virar');

    contador = contador + 1;
    console.log(contador);
    if (click1 === undefined){
    click1 = cartaclicada.innerHTML; 


    //impedir que as cartas clicadas sejam desviradas
    cartaclicada.classList.add('disabled');

    }

    else if (click1 !== undefined && click2 === undefined){
        click2 = cartaclicada.innerHTML;

        cartaclicada.classList.add('disabled');
        if (click1 === click2){

            //manter as repostas certas viradas
            mantervirada();

            contadorAcertos = contadorAcertos + 1;
            setTimeout(fimdejogo,500);
        }
        else {

            //desvirar as respostas erradas
          setTimeout(desvirar, 1000);

        }

        //impedir que mais de 2 cartas sejam viradas ao mesmo tempo

        site.classList.toggle('disabledSite');
        setTimeout(bloqclick, 1000);

    }
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
}

function desvirar(){
    let colecao = document.getElementsByClassName('virar');
    let desvira1 = colecao[0];
    let desvira2 = colecao[1];
    desvira1.classList.remove('virar', 'disabled');
    desvira2.classList.remove('virar', 'disabled');


    click1 = undefined;
    click2 = undefined;
    colecao = [];
}

function bloqclick (){
    let site = document.querySelector('.cartas');
    site.classList.toggle('disabledSite');

}

let novaCarta;
let listaCartas;
let posicao = [];
let cartasBagunçadas = [];

function inicio() {
    quantidade = Number(prompt('Com quantas cartas deseja jogar? (Insira um número par entre 4 e 14)'));

if (quantidade >= 4 && quantidade <= 14 && quantidade % 2 === 0) {
    for (let i=0; i<=(quantidade-1); i++) {
        cartasEscolhidas.push(cartasPossiveis[i]);
        
        posicao.push(i);
        
    }
    for (let j = 0; j < quantidade; j++) {
              let indice = posicao[Math.floor(Math.random()*posicao.length)];
              cartasBagunçadas.push(indice)
              posicao.splice(posicao.indexOf(indice), 1)


              novaCarta = `<li data-test="card" class="card" id=${j} onclick="virarcarta(this)">
        <div class="front-face face" >
          <img data-test="face-down-image" src="imagens/back.png"/>
        </div>
        <div class="back-face face">
          <img data-test="face-up-image" src=${cartasEscolhidas[cartasBagunçadas[j]]} />
        </li> `
        

        listaCartas  = document.querySelector('.cartas').innerHTML;
        listaCartas = listaCartas + novaCarta;
        document.querySelector('.cartas').innerHTML = listaCartas;

        
            }
            setInterval(cronometro,1000);
        }     

else {
    alert('Número inválido');
    inicio();
}
}

function fimdejogo (){
    console.log(contadorAcertos);
if ((contadorAcertos*2)===cartasEscolhidas.length){
    alert(`Você ganhou em ${contadorAcertos*2} jogadas! A duração do jogo foi de ${tempo} segundos!`);
    jogardenovo();
}

function jogardenovo (){
    let novoJogo = prompt('Gostaria de reiniciar a partida? (Responda com "sim" ou "não".)');

    if (novoJogo==="sim"){
        document.querySelector('.cartas').innerHTML = [];
        inicio();
        
    }

    else if (novoJogo!=="não" && novoJogo!=="sim"){
        alert('Resposta inválida!');
        jogardenovo();

    }
}
}

let tempo = 0;
let idInterval;
function cronometro(){
    tempo++;
    document.querySelector(".tempo").innerHTML = tempo;
}

inicio();