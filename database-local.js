export class DatabaseLocalStorage{
    #products = JSON.parse(localStorage.getItem('productList')) || [{ name: 'Elemento de testes', price: 'R$2', description: 'Un teste' },]

    //create
    addProduct(product){
        this.#products.add(product)
        this.saveLocalstorage
    }

    //read
    getProducts(){
        return this.#products
    }

    //update
    updateProduct(id,product){
        this.#products[id] = product
        this.saveLocalstorage
    }

    //delete
    deleteProduct(id){
        this.#products.splice(id,1)
        this.saveLocalstorage
    }

    //serealiza e salva a lista no local storage
    saveLocalstorage(){
        localStorage.setItem('productList', JSON.stringify(this.#products))
    }
}