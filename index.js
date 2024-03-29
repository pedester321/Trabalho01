//Round 2
//Espera todos elementos carregarem para poder executar o JS
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('productList') === null) { //Se nao existir uma lista
        const productList = [
            { name: 'Pc Gamer', price: 'R$2000', description: 'Pc Game da Marca Positivo' },
            { name: 'Geladeira', price: 'R$3000', description: 'Geleadeira Eletrolux braba' },
            //Lista inicial 
        ];
        localStorage.setItem('productList', JSON.stringify(productList)); //salva a lista
    
    }
    const storedProductList = JSON.parse(localStorage.getItem('productList')); //pega a lista do localstorage
    const productListElement = document.getElementById('product-list'); //pega a div com id product-list
    
    //Read
    if(storedProductList){   
        storedProductList.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
    
            // Cria uma acora para todos os elementos
            const productLink = document.createElement('a');
            // Set the href attribute to point to the product detail page with the product's id
            productLink.href = `produto-detalhe.html?product=${product.name}`;
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

