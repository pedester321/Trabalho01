import {DatabaseLocalStorage} from './database-local.js';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cadastro').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way
        
        const database = new DatabaseLocalStorage()

        // Pega os dados do form
        const productName = document.getElementById('item').value;
        const productPrice = document.getElementById('price').value;
        const productDescription = document.getElementById('description').value;
        
        //Construindo um novo produto
        const newProduct = {
            name: productName,
            price: 'R$'+productPrice, //formatando o din din
            description: productDescription
        }
        
        try {
            database.addProduct(newProduct)

            alert("Produto adcionado com sucesso.")
            window.location.href= 'index.html' //volta para pagina inicial
        } catch (error) {
            alert(error)
        }
    })
})