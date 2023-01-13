let cartasPossiveis = ['imagens/bobrossparrot.gif', 'imagens/bobrossparrot.gif', 
'imagens/explodyparrot.gif', 'imagens/explodyparrot.gif',
'imagens/fiestaparrot.gif', 'imagens/fiestaparrot.gif', 
'imagens/metalparrot.gif', 'imagens/metalparrot.gif', 
'imagens/revertitparrot.gif', 'imagens/revertitparrot.gif', 
'imagens/tripletsparrot.gif', 'imagens/tripletsparrot.gif', 
'imagens/unicornparrot.gif','imagens/unicornparrot.gif'];

let cartasEscolhidas = [];


function comparador() { 
	return Math.random() - 0.5; 
}

function virarcarta(cartaclicada){
    cartaclicada.classList.toggle('virar');
}

let novaCarta;
let listaCartas;

function inicio() {
    let quantidade = Number(prompt('Com quantas cartas deseja jogar?'));

if (quantidade >= 4 && quantidade <= 14 && quantidade % 2 === 0) {
    for (let i=0; i<=(quantidade-1); i++) {
        cartasEscolhidas.push(cartasPossiveis[i]);
        console.log(cartasEscolhidas)


        novaCarta = `<li class="card" onclick="virarcarta(this)">
        <div class="front-face face" >
          <img src="imagens/back.png"/>
        </div>
        <div class="back-face face">
          <img src=${cartasEscolhidas[i]} />
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