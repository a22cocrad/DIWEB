/**
 *  @author: Adrián Cordovero Crespo
 * Usando la Api Canvas, carga un imagen, recortala y redimensionala en un canvas.
 * En el archivo debe aparecer también la imagen original. Se valorará la original.
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
        let img = new Image();
        img.src = 'img.png';
        img.onload = function(){
            contexto.drawImage(img, 0, 0, 50 , 504); // img ultra larga
            contexto.drawImage(img, 70, 10, 800, 38); // img ultra ancha
            contexto.drawImage(img, 100, 100); // img original
            contexto.drawImage(img, 325, 230, 120 , 234, 1000, 200, 120, 176); // cara de messi en el pantano
            contexto.drawImage(img, 380, 400, 120 , 234, 1140, 200, 120, 176); // cara del pescao de messi

         }
    }
});
