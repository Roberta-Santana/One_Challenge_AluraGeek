const nome = document.getElementById('nome').value;
const valor = document.getElementById('valor').value;
const imagem = document.getElementById('imagem').value;
const ul = document.querySelector('.estoque ul');

function adicionarProduto() {
    const li = document.createElement('li');
    li.classList.add('produto_card');

    img.src = imagem;
    img.alt = nome;

    const descricao = document.createElement('p');
    descricao.classList.add('descricao');
    descricao.textContent = nome;

    const preco = document.createElement('h1');
    preco.classList.add('preco');
    preco.textContent = `R$ ${valor}`;

    li.appendChild(img);
    li.appendChild(descricao);
    li.appendChild(preco);
    ul.appendChild(li);
}