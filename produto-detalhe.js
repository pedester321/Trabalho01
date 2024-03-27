
document.addEventListener('DOMContentLoaded', function() {
    const productList = JSON.parse(localStorage.getItem('productList'));
    const product = productList.find(product => product.name === getQueryParam('product'));

    document.getElementById('item').value = product.name;
    document.getElementById('price').value = product.price;
    document.getElementById('description').value = product.description;

    document.getElementById('update').addEventListener('submit', function(event) {
        event.preventDefault();

        //deleta o produto antigo
        const index = productList.findIndex(product => product.name === getQueryParam('product'));

        if (index !== -1) {
            productList.splice(index, 1);
        }

        // Adiciona o item a lista
        productList.push({
            name: document.getElementById('item').value,
            price: 'R$'+document.getElementById('price').value,
            description: document.getElementById('description').value
        });

        // Serializa a lista e salva no localStorage
        localStorage.setItem('productList', JSON.stringify(productList));

        alert('O produto foi atualizado com sucesso!');

        window.location.href= 'index.html' // voltando a pagina inicial
    });
});
function deleteProduct(){
    const productListString = localStorage.getItem('productList');

    if (productListString) {
        //Passando a lista do localStorage para uma lista "de verdade"
        productList = JSON.parse(productListString);
    }else{
        alert('Erro ao deletar')
    }

    //Procurando o produto pelo nome
    const index = productList.findIndex(product => product.name === getQueryParam('product'));

    if (index !== -1) {
        productList.splice(index, 1);
    }

    // Serializa a lista e salva no localStorage
    localStorage.setItem('productList', JSON.stringify(productList));
    alert('Produto deletado!')

    window.location.href= 'index.html' // voltando a pagina inicial
}

function getQueryParam(param) { //Pega parametro passado na URI
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}