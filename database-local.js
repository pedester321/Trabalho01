export class DatabaseLocalStorage{
    //Cria ou carrega um vetor de objetos que sera a lista de produtos
    #products = JSON.parse(localStorage.getItem('productList')) || [{ name: 'Elemento de testes', price: 'R$2', description: 'Um teste' }]

    //create
    addProduct(product){
        this.#products.push(product)
        this.saveLocalstorage()
    }

    //read
    getProducts(){
        return this.#products
    }

    //update
    updateProduct(id, product){
        this.#products[id] = product
        this.saveLocalstorage()
    }

    //delete
    deleteProduct(id){
        this.#products.splice(id,1)
        this.saveLocalstorage()
    }

    //serealiza e salva a lista no local storage
    //Usado para manter a lista atualizada entre as operacoes
    saveLocalstorage(){
        localStorage.setItem('productList', JSON.stringify(this.#products))
    }

    //Vai que precisa kk
    loadLocalStorage(){
        this.#products = JSON.parse(localStorage.getItem('productList'))
    }
}