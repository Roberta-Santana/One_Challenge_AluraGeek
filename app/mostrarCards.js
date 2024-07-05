import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

function constroiCard(imagem, descricao, preco){
    const card = document.createElement('li');
    card.className ="produto_card";
    card.innerHTML = `<img src=${imagem} alt=${descricao}>
    <p class="descricao">${descricao}</p>
    <h1 class="preco">R$ ${preco}</h1>`
    return card;
}

async function listaDeCards(){
    const listaApi = await conectaApi.listarCards();
    listaApi.forEach(element => lista.appendChild(
        constroiCard(element.imagem, element.descricao, element.preco)
    ));
} 
listaDeCards();