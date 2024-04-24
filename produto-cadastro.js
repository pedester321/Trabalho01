import {DatabaseLocalStorage} from './database-local.js';

document.addEventListener('DOMContentLoaded', function() {

    const database = new DatabaseLocalStorage() //Coletando a instância do BD
    const submitButton = document.getElementById('submit') // Botão com o ID "Submit"

    //Condicional para verificar existência do botão.
    if (submitButton) { 
        submitButton.addEventListener('click', function() {

            //Criando um novo produto com os valores do formulario
            const newProduct = {
                name: document.getElementById('item').value,
                price: document.getElementById('price').value,
                description: document.getElementById('description').value
            }
            database.addProduct(newProduct) //Chama a funcao create passando o produto
            alert('O produto foi cadastrado com sucesso!') //Janela para 
            window.location.href= 'index.html' // voltando a pagina inicial
        })
    } else {
        console.log('Submit button not found')
    }
})