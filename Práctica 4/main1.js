/**
 * @author: Adrián Cordovero Crespo
 */

function cargaContextoCanvas(idCanvas){
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext){
        let contexto = elemento.getContext('2d');
        if(contexto){
            return contexto;
        }
    }
    return false;
}

let angulo = 0;

function rotacion() {
    let width  = 200;
    let height = 200;
    let x = 600;
    let y = 200;
    let centro_x = x + 0.5 * width;   // posición x del centro del rectángulo
    let centro_y = y + 0.5 * height;  // posición y del centro del rectángulo

    contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height);  // Limpiar canvas

    // Trasladamos el contexto
    contexto.translate(centro_x, centro_y);
    contexto.rotate((Math.PI / 180) * angulo);  // rotamos el ángulo especificado
    contexto.translate(-centro_x, -centro_y);  // Colocamos de nuevo el contexto en la posición original

    // Pintamos el cuadrado rotado
    contexto.fillStyle = "rgba(0,0,255,0.5)";
    contexto.fillRect(x, y, width, height);
    
    angulo += 0.02;  // Incrementar ángulo para la próxima iteración
    if (angulo >= 360) angulo = 0;  // Resetear ángulo si ha completado una rotación completa
    requestAnimationFrame(rotacion);  // Llamar a rotacion nuevamente antes del próximo repintado
}

window.addEventListener("DOMContentLoaded",function(){
    contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        rotacion();
    }
});

