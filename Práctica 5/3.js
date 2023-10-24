/**
 * @author: Adrián Cordovero Crespo
 * Usando la Api Canvas, crea una figura con stroke, 
 * haz un degradado dentro de la figura. Dale un nombre y colócalo debajo de la figura. Se valorará la original.
 */
function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

window.addEventListener("DOMContentLoaded", function () {
    contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        // Crear degradado
        var degradado = contexto.createRadialGradient(200, 200, 0, 200, 200, 100); // Crea un degradado radial y lo almacena en la variable "degradado". 
        degradado.addColorStop(0, 'violet'); // Establece el color rojo en el centro del degradado. 
        degradado.addColorStop(1, 'blue'); // Establece el color azul en el borde del degradado. 

        // Dibujar círculo
        contexto.beginPath(); // Comienza un nuevo camino para dibujar. 
        contexto.arc(200, 200, 100, 0, 2 * Math.PI); // Dibuja un círculo en las coordenadas (200, 200) con un radio de 100 píxeles. 
        contexto.closePath(); // Cierra el camino que se está dibujando. 

        // Aplicar degradado y stroke
        contexto.fillStyle = degradado; // Establece el estilo de relleno del contexto a nuestro degradado. 
        contexto.fill(); // Rellena la figura con el estilo de relleno establecido. 
        contexto.strokeStyle = 'black'; // Establece el color del trazo a negro. 
        contexto.lineWidth = 2; // Establece el ancho del trazo a 5 píxeles. 
        contexto.stroke(); // Aplica el trazo a la figura. 

        // Colocar nombre debajo de la figura
        contexto.font = '20px Arial'; // Establece la fuente para el texto a Arial de 20 píxeles. 
        contexto.fillText('Adrián Cordovero Crespo', 90, 350); // Dibuja el texto 'Adrián Cordovero Crespo' en las coordenadas (90, 350). 

    }
}
);
