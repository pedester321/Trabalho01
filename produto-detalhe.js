import {DatabaseLocalStorage} from './database-local.js';

document.addEventListener('DOMContentLoaded', function() {

    const database = new DatabaseLocalStorage
    const productList = database.getProducts()
    const product = productList[getQueryParam(getQueryParam('id'))]

    document.getElementById('item').value = product.name
    document.getElementById('price').value = product.price
    document.getElementById('description').value = product.description

    const updateButton = document.getElementById('update')
    const deleteButton = document.getElementById('delete')

    if (updateButton) { 
        updateButton.addEventListener('click', function() {
            const updatedProduct = {
                name: document.getElementById('item').value,
                price: document.getElementById('price').value,
                description: document.getElementById('description').value
            }
            const id = getQueryParam('id')
            database.updateProduct(id,updatedProduct)
            alert('O produto foi atualizado com sucesso!');
            window.location.href= 'index.html' // voltando a pagina inicial
        });
    } else {
        console.log('update button error');
    }

    if (deleteButton) { 
        deleteButton.addEventListener('click', function() {
            
            database.deleteProduct(getQueryParam('id'))
            window.location.href= 'index.html'
            console.log('Delete button clicked');
        });
    } else {
        console.log('Delete button not found');
    }
})

//Pega parametro passado na URI
function getQueryParam(param) { 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}