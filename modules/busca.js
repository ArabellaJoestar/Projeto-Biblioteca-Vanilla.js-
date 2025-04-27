import { listaDeLivros } from "./dados.js"

export function buscaLivroTitle(input) {
    input = input
     
    if (listaDeLivros.some(livro => livro.titulo.toLowerCase().includes(input))) {
        const indexLivro = listaDeLivros.filter(livro => livro.titulo.includes(input))
        return indexLivro
    }
    else {
        return false
    }
}
