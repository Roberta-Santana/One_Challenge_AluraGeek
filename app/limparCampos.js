const limparBt = document.querySelector('[data-limpar]');

limparBt.addEventListener('click', ()=>{
    const nome = document.querySelector('[data-nome]');
    const preco = document.querySelector('[data-preco]');
    const imagem = document.querySelector('[data-imagem]');
    nome.value = ' ';
    preco.value = ' ';
    imagem.value = ' ';
});
