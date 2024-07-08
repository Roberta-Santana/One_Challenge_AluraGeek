import { conectaApi } from "./conectaApi.js";

const form = document.querySelector('[data-form]');

async function adicionarProduto(evento){
    evento.preventDefault();

    const nome = document.querySelector('[data-nome]').value;
    const preco = document.querySelector('[data-preco]').value;
    const imagem = document.querySelector('[data-imagem]').value;

    try{
        if(nome==' '||preco==' '|| imagem==" "){
            alert("Preencha todos os campos"); 
            throw new error;
        }

        await conectaApi.criarCard(nome, preco, imagem);
    } catch(error){
        console.error('Erro ao criar card:', error)
    }

    window.location.reload(true);
}

form.addEventListener('submit', evento=> adicionarProduto(evento));