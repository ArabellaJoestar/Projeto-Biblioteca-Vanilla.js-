import { listaEditoras, ListaAutores } from "./dados.js";
import { listaDeLivros } from "./dados.js";
import { criaLivroNaPag } from "./criaLivro.js";
import { buscaLivroTitle } from "./busca.js";
export function renderHome(renderizaDados) {
    renderizaDados.innerHTML = `
    <div class = "ListaLivros">
        <div class="welcomeDiv">
            <h2>Bem-vindo à Biblioteca</h2>
        </div>
    </div>
    `;
}

export function renderGerenciamento(renderizaDados) {
    renderizaDados.innerHTML = `
        <div class="ListaLivros">
            <div class="divGerenciamentoLivros">
                <h2>Gerenciamento de Livros</h2>
                <div class = 'divBusca'>
                    <input type="text" class
                    ="buscaLivroInput" placeholder="Insira o livro a ser buscado">
                </div>
                <div class="livrosList">
                    <table class="tableLivros">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Ano</th>
                                <th>Editora</th>
                            </tr>
                        </thead>
                        <tbody class='tbodyTable'>
                           
                        </tbody>
                    </table>
                </div>

        </div>
    `;
}

export function renderBusca(renderizaDados) {
    renderizaDados.innerHTML = `
       <div class="ListaLivros">
    <div class="addLivros">
        <h2>Adicionar Livros</h2>
        <div class="dadosLivro">
            <div class="inputGroup">
                <label for="titulo">Insira o título</label>
                <input type="text" id="titulo" placeholder="Título do livro" name="tituloLivro">
            </div>
            <div class="inputGroup">
                <label for="autor">Nome do autor</label>
                <select id="autor"></select>
            </div>
            <div class="inputGroup">
                <label for="ano">Data de lançamento</label>
                <input type="text" id="ano" placeholder="Data de lançamento">
            </div>
            <div class="inputGroup">
                <label for="editora">Editora</label>
                <select id="editora">
                </select>
            </div>
            <button class='addLivroNoArray'>Adicionar Livro</button>
        </div>
    </div>
</div>
    `;
}

function renderizaOptions(elSelecionado, arrayParaIteracao) {
    elSelecionado.innerHTML = '<option value="" disabled selected>Selecione uma opção</option>'

    arrayParaIteracao.forEach(editora => {
        const option = document.createElement('option')
        option.value = editora;
        option.innerText = editora
        elSelecionado.appendChild(option)
    })

}

export function renderizaEditoras(elSelecionado) {
    return renderizaOptions(elSelecionado, listaEditoras)
}
export function renderizaAutores(elSelecionado) {
    return renderizaOptions(elSelecionado, ListaAutores)
}

export function renderizaLivrosNaDiv(tableClass, input) {
    const tableClassSelector = document.querySelector(tableClass)
    if (input.value === '') {
        tableClassSelector.innerHTML = ''
        let livrosIniciais = listaDeLivros.slice(0, 10)
        for (const livro of livrosIniciais) {
            tableClassSelector.appendChild(criaLivroNaPag(livro))
        }

    }
    else {
        tableClassSelector.innerHTML = ''
        const livrosEncontrados = buscaLivroTitle(input.value)
        if(!livrosEncontrados){
            console.log('Não existem livros')
            return
        }
        

            for (const livro of livrosEncontrados) {
                tableClassSelector.appendChild(criaLivroNaPag(livro))
            }
        

           
        


    }
}