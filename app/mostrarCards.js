import { conectaApi } from "./conectaApi.js";
import { apagaCard } from "./deletarCard.js";

const lista = document.querySelector('[data-lista]');

function constroiCard(id, imagem, nome, preco){
    
    const card = document.createElement('li');
    card.className ="produto_card";
    card.innerHTML = `<img src=${imagem}>
    <div class="card_info">
    <p class="descricao">${nome}</p>
    <div class="card_info_info">
    <h1 class="preco">R$ ${preco}</h1>
    <buttton class="lixeira" id=${id} data-delete> <img src="./img/lixeira.png" alt="Eliminar" width="20px"> </button>
    </div></div>`
    
    return card;
}

async function listaDeCards(){
    try{
        const listaApi = await conectaApi.listarCards();
        listaApi.forEach(element => lista.appendChild(
            constroiCard(element.id, element.imagem, element.nome, element.preco)
        ));

        const btDeleta = document.querySelectorAll('[data-delete]');
        btDeleta.forEach(bt=>{
            bt.addEventListener('click', ()=> apagaCard(bt.id));
        })
        
    } catch(error){
        console.error("Erro ao listar produtos:", error);
    }
    
} 

listaDeCards();

