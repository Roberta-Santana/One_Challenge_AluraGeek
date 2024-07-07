import { conectaApi } from "./conectaApi.js";

const inserir = document.querySelector('[data-form]');

function coletarDados(){
    const nome = document.querySelector('[data-nome]').value;
    const preco = document.querySelector('[data-preco]').value;
    const imagem = document.querySelector('[data-imagem]').value;

    return {nome, preco, imagem}
}

async function adicionarProduto(){
    const {nome, preco, imagem} = coletarDados();
    console.log(nome,preco)
    try{
        await conectaApi.criarCard(nome, preco, imagem);
    } catch(error){console.error('erro ao criar o card', error)

    }
}
inserir.addEventListener('submit',adicionarProduto)