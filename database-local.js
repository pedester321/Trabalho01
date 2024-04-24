export class DatabaseLocalStorage{
    //Cria ou carrega um vetor de objetos que sera a lista de produtos
    #products = JSON.parse(localStorage.getItem('productList')) || [{ name: 'Elemento de testes', price: 'R$2', description: 'Um teste' }]

    //create
    //Adiciona a lista passando o produto como parâmetro
    addProduct(product){
        this.#products.push(product)
        this.saveLocalstorage()
    }

    //read
    //Esta função retorna os dados com a lista de todos os produtos
    getProducts(){
        return this.#products
    }

    //update
    //Passa o id do produto a ser alterado e passa por parâmetro salvando as alterações.
    updateProduct(id, product){
        this.#products[id] = product
        this.saveLocalstorage()
    }

    //delete
    //Deleta os dados de um produto através do Id
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
    //Função para fazer um load na lista.
    loadLocalStorage(){
        this.#products = JSON.parse(localStorage.getItem('productList'))
    }
}