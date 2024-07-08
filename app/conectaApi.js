async function listarCards(){
    const conexao = await fetch('http://localhost:3000/produto');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criarCard(nome, preco, imagem){
    const conexao = await fetch('http://localhost:3000/produto', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({ 
            nome:nome, 
            preco:`${preco}`, 
            imagem:imagem
        })
    });
    console.log(nome, preco)
    if(!conexao.ok){
        throw new console.error("não foi possível enviar card");
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

//CHAT GPT-DELETE
 async function deletarCard(id){
    const conexao = await fetch('http://localhost:3000/produto', {
        method: "DELETE"
    });
    if(!conexao.ok){
        throw new Error('Não foi deletado');
    }

}

export const conectaApi={
    listarCards,
    criarCard
}