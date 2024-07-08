import { conectaApi } from "./conectaApi.js";


 
botaoLixo.addEventListener("click", ()=> deletarCard(id));
console.log(botaoLixo)  



 async function deletarCard(id) {
    try {
        await conectaApi.deletarCard(id);
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }

    window.location.reload(true);
}

const lixeira = document.querySelector('[data-id]');
lixeira.addEventListener("click", async ()=>{
    try{await conectaApi.deletarCard(id);
        card.remove();
    } catch(error){console.error(error)}
})




