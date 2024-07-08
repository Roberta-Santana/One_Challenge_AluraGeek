async function listarCards(){
    try{
        const conexao = await fetch('http://localhost:3000/produto');
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
    } catch(error){
        console.error("Erro ao listar produtos:", error)
    }

}

//chama o fetch/metodo, testa a conexão, converte e retorna conversão
async function criarCard(nome, preco, imagem){
    try{
        const zerosPreco = parseFloat(preco).toFixed(2);
        const formatoPreco = zerosPreco.toString().replace('.',',');

        const conexao = await fetch('http://localhost:3000/produto', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({ 
                nome:nome, 
                preco:formatoPreco, 
                imagem:imagem
            })
        });
        if(!conexao.ok){
            throw new console.error("não foi possível enviar card");
        }
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
    } catch(error){
        console.error('Erro ao criar card:', error);
    }
 
}

//CHAT GPT-DELETE - chama o fetch,metodo, converte, teste erro
 async function deletarCard(id){
    const conexao = await fetch(`http://localhost:3000/produto/${id}`, {

        method: "DELETE"
    });
    const conexaoConvertida = await conexao.json();
    if(!conexaoConvertida.ok){
        throw new Error('Não foi deletado');
    }
}

export const conectaApi={
    listarCards,
    criarCard, 
    deletarCard
}