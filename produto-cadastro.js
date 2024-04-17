import {DatabaseLocalStorage} from './database-local.js';

document.addEventListener('DOMContentLoaded', function() {

    const database = new DatabaseLocalStorage()
    const submitButton = document.getElementById('submit')

    if (submitButton) { 
        submitButton.addEventListener('click', function() {

            //Criando um novo produto com os valores do formulario
            const newProduct = {
                name: document.getElementById('item').value,
                price: document.getElementById('price').value,
                description: document.getElementById('description').value
            }
            database.addProduct(newProduct) //Chama a funcao create passando o produto
            alert('O produto foi cadastrado com sucesso!')
            window.location.href= 'index.html' // voltando a pagina inicial
        })
    } else {
        console.log('Submit button not found')
    }
})