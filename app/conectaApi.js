async function listarCards(){
    const conexao = await fetch('http://localhost:3000/produto');
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);
    return conexaoConvertida;
}

export const conectaApi = {
    listarCards
}
