import { DatabaseLocalStorage } from "./database-local";

//Espera todos elementos carregarem para poder executar o JS
document.addEventListener('DOMContentLoaded', function() {
    
    const database = new DatabaseLocalStorage
    const productList = database.getProducts

    //pega a div com id product-list
    const productListElement = document.getElementById('product-list');
    
    //Read
    if(productList){   
        productList.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
    
            // Cria uma acora para todos os elementos
            const productLink = document.createElement('a');
            // Set the href attribute to point to the product detail page with the product's id
            productLink.href = `produto-detalhe.html?id=${product}`;
            productLink.innerHTML = `
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
                <div class="product-description">${product.description}</div>
            `;
    
            // Append the anchor tag to the product element
            productElement.appendChild(productLink);
    
            // Append the product element to the list
            productListElement.appendChild(productElement);
        });
    }
});

