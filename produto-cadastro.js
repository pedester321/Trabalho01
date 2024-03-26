document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cadastro').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        // Pega os dados do form
        const productName = document.getElementById('item').value;
        const productPrice = document.getElementById('price').value;
        const productDescription = document.getElementById('description').value;

        const newProduct = { //Construindo um novo produto
            name: productName,
            price: 'R$'+productPrice, //formatando o din din
            description: productDescription
        };
            
        addProductToStorage(newProduct)
        
        window.location.href= 'index.html' // voltando a pagina inicial
        
        // document.getElementById('name').value = '';
        // document.getElementById('price').value = '';
        // document.getElementById('description').value = '';
    });
});

//Create
function addProductToStorage(newProduct) {
    // Pega a lista do localStorage
    const productListString = localStorage.getItem('productList');
    let productList = [];

    if (productListString) {
        //Passando a lista do localStorage para uma lista "de verdade"
        productList = JSON.parse(productListString);
    }

    // Adiciona o item a lista
    productList.push(newProduct);

    // Serializa a lista e salva no localStorage
    localStorage.setItem('productList', JSON.stringify(productList));

    alert('O produto foi adicionado com sucesso!');
}
