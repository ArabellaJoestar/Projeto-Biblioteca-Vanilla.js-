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


export function buscaLivroTitleReturnIndex(valueTitle){

    if(listaDeLivros.some(livro => livro.titulo.toLowerCase().includes(valueTitle))){
        const indexLivro = listaDeLivros.indexOf(valueTitle)
        return indexLivro
    }
    else {
        return false
    }
}