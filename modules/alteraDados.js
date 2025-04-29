import { listaDeLivros } from "./dados.js";
import { buscaLivroTitle, buscaLivroTitleReturnIndex } from "./busca.js";

export function apagaLivro(elClicado){
    const trNext = elClicado.closest('tr');
    if(trNext){
        const titleLivroClass = trNext.querySelector('.trTituloLivro')
        if(buscaLivroTitleReturnIndex(titleLivroClass.innerText)){
            listaDeLivros.splice(buscaLivroTitleReturnIndex(titleLivroClass.innerText), 1)
            return true
        }
        else{
            return false
        }
       
    }
    else{
        return false
    }
    
}