
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

function limpiarPantalla() {
    contexto.clearRect(0, 0, 1450, 675);//método que borra los píxeles de un rectángulo dado, x,y, width, height
}

let imagenes = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg', 'imagen4.jpg', 'imagen5.jpg', 'imagen6.jpg', 'imagen7.jpg', 'imagen8.jpg'];  // Crea un array con las rutas a las imágenes.
let index = 0;  // Inicializa un índice a 0 para rastrear la imagen actual.

function mostrarImagen() { // Define una función llamada "mostrarImagen".
    let img = new Image();  // Crea una nueva instancia de la clase Image y la almacena en la variable "img".
    img.src = imagenes[index];  // Establece la fuente de la imagen al valor actual del array de imágenes.
    img.onload = function () {  // Define una función que se ejecutará cuando la imagen se haya cargado completamente.
        limpiarPantalla() // Limpia la pantalla antes de pintar la siguiente imagen
        contexto.drawImage(img, 0, 0, 1450, 675);  // Dibuja la imagen en el canvas.
    }
    index = (index + 1) % imagenes.length;  // Incrementa el índice, y lo mantiene dentro de los límites del array.
}

mostrarImagen();  // Llama a la función "mostrarImagen" para mostrar la primera imagen.
setInterval(mostrarImagen, 2000);  // Establece un intervalo para llamar a "mostrarImagen" cada 2 segundos.


window.addEventListener("DOMContentLoaded", function () {
    contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        contexto.fillStyle = "lightgrey";
        contexto.fillRect(0, 0, 1450, 675);//dibuja rectangulo gris 
        mostrarImagen();  // Llama a la función "mostrarImagen" para mostrar la primera imagen.
        setInterval(mostrarImagen, 200);  // Establece un intervalo para llamar a "mostrarImagen" cada 2 segundos.
    }
});
