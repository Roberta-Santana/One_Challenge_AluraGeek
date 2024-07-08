import { conectaApi } from "./conectaApi.js";
 
async function apagaCard(id){
    try{
        await conectaApi.deletarCard(id);
    } catch(error){
        console.error('Erro ao deletar produto:', error);
    }
}

export {apagaCard}; 