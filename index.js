import {DatabaseLocalStorage} from './database-local.js';

//Espera todos elementos carregarem para poder executar o JS
document.addEventListener('DOMContentLoaded', function() {
    
    const database = new DatabaseLocalStorage()
    let productList = database.getProducts()

    //pega a div com id product-list onde ficaram os itens
    const productListElement = document.getElementById('product-list')
    
    //Pega todos os elementos da lista e cria os elementos HTML 
    if(productList){   
        database.getProducts().forEach((product , index) => { // Para todo produto e seu indice
            const productElement = document.createElement('div')
            productElement.classList.add('product-item')
    
            // Cria uma acora para todos os elementos
            const productLink = document.createElement('a')
            // Aponta o atributo href para pagina produto-detalhe com o seu indice
            productLink.href = `produto-detalhe.html?id=${index}`
            productLink.innerHTML = `
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
                <div class="product-description">${product.description}</div>
            `
    
            // Adiciona a ancora ao elemento html na tela
            productElement.appendChild(productLink)
    
            // Adiciona o elemento a lista
            productListElement.appendChild(productElement)
        })
    }
})

