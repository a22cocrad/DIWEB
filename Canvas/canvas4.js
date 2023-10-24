function cargaContextoCanvas(IdCanvas){
    let elemento = document.getElementById(IdCanvas);
    if (elemento && elemento.getContext){
        let contexto  = elemento.getContext('2d');
        if(contexto){
            return contexto
        }
    }
    return false;
}
