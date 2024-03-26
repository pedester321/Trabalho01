
document.addEventListener('DOMContentLoaded', function() {
    const storedProductList = JSON.parse(localStorage.getItem('productList'));
    const name = getQueryParam('product');
    const product = storedProductList.find(product => product.name === name);

    const productName = document.getElementById('item').value = product.name;
    const productPrice = document.getElementById('price').value = product.price;
    const productDescription = document.getElementById('description').value = product.description;

    document.getElementById('update').addEventListener('submit', function(event) {
        event.preventDefault();
        
    });
});
function deleteProduct(){

    alert('Produto deletado!')
}

function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}