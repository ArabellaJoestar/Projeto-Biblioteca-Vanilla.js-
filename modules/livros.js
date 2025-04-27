class Livro {
    constructor(codigolivro, titulo, autor, ano, editora, disponivel) {
        this.codigolivro = codigolivro;
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.editora = editora;
        this.disponivel = disponivel;
    }

    adicionaLivro(array) {
        let objetoLivro = { 
            titulo: this.titulo,
            autor: this.autor,
            ano: this.ano,
            editora: this.editora,
            disponivel: this.disponivel
        }
        array.push(objetoLivro)
    }

}

export default Livro;