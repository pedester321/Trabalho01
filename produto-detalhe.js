import {DatabaseLocalStorage} from './database-local.js';

document.addEventListener('DOMContentLoaded', function() {

    const database = new DatabaseLocalStorage
    const productList = database.getProducts()
    const product = productList[getQueryParam('id')]

    document.getElementById('item').value = product.name
    document.getElementById('price').value = product.price
    document.getElementById('description').value = product.description

    document.getElementById('update').addEventListener('submit', function(event) {
        event.preventDefault();

        const updatedProduct = {
                name: document.getElementById('item').value,
                price: document.getElementById('price').value,
                description: document.getElementById('description').value
            }

        try {
            database.updateProduct(id,updatedProduct)
            alert('O produto foi atualizado com sucesso!');
            window.location.href= 'index.html' // voltando a pagina inicial
        } catch (error) {
            alert(error)
        }
    })
    const deleteButton = document.getElementById('delete');
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