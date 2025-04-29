import Livro from "./livros.js";
import { listaDeLivros } from "./dados.js";

function criaLivro(codigo, titulo, autor, ano, editora) {
    const livroCriado = new Livro(codigo, titulo, autor, ano, editora, true)
    return livroCriado
}

export function recebeDadosInputLivro(inputTitulo, inputAutor, inputData, inputEditora) {
    const valueTitulo = document.getElementById(inputTitulo)
    const valueAutor = document.getElementById(inputAutor)
    const valueData = document.getElementById(inputData)
    const valueEditora = document.getElementById(inputEditora)
    
    if(valueTitulo.value === '' || valueAutor.value === '' || valueData === '' || valueEditora === ''){
        return false
    }
    else{
        const livro = criaLivro(listaDeLivros.length, valueTitulo.value, valueAutor.value, valueData.value, valueEditora.value)
        listaDeLivros.push(livro)
        valueTitulo.value = ''
        valueData.value = ''
        valueAutor.value = ''
        valueEditora.value = ''
        return true
    }
    
    
}

export function criaLivroNaPag(livro) {
    const tr = document.createElement('tr')
    const tdTitulo = document.createElement('td')
    const tdAutor = document.createElement('td')
    const tdAno = document.createElement('td')
    const tdEditora = document.createElement('td')
    const buttonDelete = document.createElement('button')

    buttonDelete.innerText = 'X'
    tdTitulo.innerText = livro.titulo
    tdAutor.innerText = livro.autor
    tdAno.innerText = livro.ano
    tdEditora.innerText = livro.editora

    buttonDelete.classList.add('buttonDelete')
    tdTitulo.classList.add('trTituloLivro')

    tr.append(tdTitulo, tdAutor, tdAno, tdEditora, buttonDelete)

    return tr
}

