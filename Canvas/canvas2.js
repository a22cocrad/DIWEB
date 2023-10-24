// Comprobar que encontramos un elemento y podemos extraer su contexto

function cargaContextoCanvas(IdCanvas) {
    let elemento = document.getElementById(IdCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

window.addEventListener("DOMContentLoaded", function(){
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        // Dibujo la tarjeta
        contexto.fillStyle = 'rgb(255,0,0)';
        contexto.fillRect(0,0,300,200);
        contexto.strokeRect(0,0,300,200);

        // Dibujo el relleno blanco
        contexto.fillStyle = 'white';
        contexto.fillRect(10,60,280,130);
        contexto.strokeStyle = 'rgb(128,128,128)';
        contexto.strokeRect(10,60,280,130);
        
        // Dibujo el texto
        contexto.font = "bold 1.8em sans-serif";
        contexto.fillText("Hola mi nombre es", 20,40);
        contexto.fillStyle = 'black';
        contexto.textAlign = 'center';
        contexto.font = "bold 70px Verdana";
        contexto.fillText("Adrián", 150,150);

    }
});

