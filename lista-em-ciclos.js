
// Armazeno as frutas em uma variável do tipo array.

let listaDeFrutas = ["Abacaxi", "Pêra", "Maçã", "Morango"];

// Armazeno a quantidade de itens da lista de frutas
let quantidadeDeFrutasDaLista = listaDeFrutas.length;

for(let i = 0; i < quantidadeDeFrutasDaLista; i++) {
    // listaDeFrutas [0];
    // listaDeFrutas [1];
    // listaDeFrutas [2];
    // listaDeFrutas [3];
   console.log(listaDeFrutas[i]);
}


// 

listaDeFrutas.forEach(function(fruta, i){
    console.log(`3. forEach - ${i} ${fruta}.`);

})