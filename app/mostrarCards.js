import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

function constroiCard(imagem, nome, preco){
    const card = document.createElement('li');
    card.className ="produto_card";
    card.innerHTML = `<img src=${imagem}>
    <div class="card_info">
    <p class="descricao">${nome}</p>
    <div class="card_info_info">
    <h1 class="preco">R$ ${preco}</h1>
    <img src="./img/lixeira.png" alt="Eliminar" width="20px">
    </div></div>`
    return card;
}

async function listaDeCards(){
    const listaApi = await conectaApi.listarCards();
    listaApi.forEach(element => lista.appendChild(
        constroiCard(element.imagem, element.nome, element.preco)
    ));
} 
listaDeCards();