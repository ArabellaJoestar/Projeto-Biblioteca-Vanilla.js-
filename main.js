import { recebeDadosInputLivro } from "./modules/criaLivro.js";
import { renderHome, renderGerenciamento, renderBusca, renderizaEditoras, renderizaAutores, renderizaLivrosNaDiv } from './modules/render.js';
import { apagaLivro } from "./modules/alteraDados.js";

document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.getElementById("homeButton");
    const gerenciamentoButton = document.getElementById("gerencLivros");
    const buscarButton = document.getElementById("addLivro");

    const renderizaDados = document.querySelector(".renderizaDados");

    homeButton.addEventListener("click", () => renderHome(renderizaDados));
    gerenciamentoButton.addEventListener("click", () => renderGerenciamento(renderizaDados));
    buscarButton.addEventListener("click", () => {
        renderBusca(renderizaDados)
        renderizaEditoras(document.getElementById("editora"))
        renderizaAutores(document.getElementById('autor'))
    });

    renderHome(renderizaDados); 
});

document.addEventListener('click', el => {
    if (el.target === document.querySelector('.addLivroNoArray')) {
        if(recebeDadosInputLivro('titulo', 'autor', 'ano', 'editora') === false){
            alert('Preencha todos os campos')
        }
        else{
            recebeDadosInputLivro('titulo', 
                'autor', 
                'ano', 
                'editora')
                alert('Dados inseridos!')
        }
        
    }
    if(el.target === document.getElementById('gerencLivros')){
        renderizaLivrosNaDiv('.tbodyTable', document.querySelector('.buscaLivroInput'))
    }

    if(el.target.classList.contains('buttonDelete')){

        apagaLivro(document.querySelector('.buttonDelete'))
        renderizaLivrosNaDiv('.tbodyTable', document.querySelector('.buscaLivroInput'))
    }
})

document.addEventListener('input', el =>{
        
    const inputBusca = document.querySelector('.buscaLivroInput')
    if(el.target.classList.contains('buscaLivroInput')){
        renderizaLivrosNaDiv('.tbodyTable', inputBusca)
        
    }
})