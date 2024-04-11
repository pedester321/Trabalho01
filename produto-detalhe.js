import {DatabaseLocalStorage} from './database-local.js';

document.addEventListener('DOMContentLoaded', function() {

    
    const database = new DatabaseLocalStorage() //Cria um instancia do banco de dados
    const id = getQueryParam('id') //Pega o parametro id
    const productList = database.getProducts() //Pega os produtos
    const product = productList[id] //Pega o produto passado pelo parametro id na URI

    //Preenche todos os campos do formulario
    document.getElementById('item').value = product.name
    document.getElementById('price').value = product.price
    document.getElementById('description').value = product.description

    //Pegando todos os botoes da pagina pelo id
    const updateButton = document.getElementById('update')
    const deleteButton = document.getElementById('delete')

    //Escutando por um evento click no botao "Atualizar"
    if (updateButton) { 
        updateButton.addEventListener('click', function() {

            //Criando um novo produto com os valores do formulario
            const updatedProduct = {
                name: document.getElementById('item').value,
                price: document.getElementById('price').value,
                description: document.getElementById('description').value
            }
            database.updateProduct(id,updatedProduct) //Chama a funcao update passando o id e produto atualizado
            alert('O produto foi atualizado com sucesso!')
            window.location.href= 'index.html' // voltando a pagina inicial
        })
    } else {
        console.log('Update button not found')
    }

    //Escutando por um evento click no botao "Deletar"
    if (deleteButton) { 
        deleteButton.addEventListener('click', function() {
        
            database.deleteProduct(id) //Chama a funcao delete passando o id
            alert('O produto foi deletado com sucesso!')
            window.location.href= 'index.html' // voltando para pagina inicial
        })
    } else {
        console.log('Delete button not found')
    }
})

//Pega parametro passado na URI
function getQueryParam(param) { 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}