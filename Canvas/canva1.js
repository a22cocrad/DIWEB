function cargaContextoCanvas(IdCanvas) {
    let elemento = document.getElementById(IdCanvas);
    if(elemento && elemento.getContext){
        let contexto = elemento.getContext('2d');
        if (contexto)
            return contexto;
    }
    return false;
}

window.addEventListener("DOMContentLoaded", () => {
    let contexto = cargaContextoCanvas("micanvas");

    if (contexto) {
        contexto.fillStyle = '#6634A2';
        contexto.fillRect(100,100,50,50);
        contexto.fillStyle = 'rgba(200,100,50,0,5)';
        contexto.fillRect(200,200,10,10);
    }  
});

