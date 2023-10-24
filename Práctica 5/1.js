/**
 * @author: Adrián Cordovero Crespo
 * Usando la Api Canvas, combina arcos y/o circulos con cualquier elemento visto en canvas. Se valorará la original.
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


let radio = 10;//variable del radio inicial, corresponde al circulo más pequeño
let xAleatorio;//estas dos serán para las coordenadas aleatorias
let yAleatorio;
function circunferencias(x, y, radio, color) {
    contexto.beginPath();// Función que sirve para decirle al contexto del canvas que vamos a empezar a dibujar un camino
    contexto.arc(x, y, radio, 0, 2 * Math.PI);//método dibujar circulo, xy como centro, radio, ang inicial y ang final rad
    contexto.fillStyle = color;//propiedad que llama al color traido como parámetro de la función
    contexto.fill();//método que rellena el circulo creado anteriormente con el color de fillstyle
}
function limpiarPantalla() {
    contexto.clearRect(0, 0, 600, 400);//método que borra los píxeles de un rectángulo dado, x,y, width, height
}
function diana(x, y) {//los parémetros serán los valores de xy aleatorio de mas abajo
    circunferencias(x, y, radio + 41, "black");// circunferencia que hace de borde a la circunferencia posterior
    circunferencias(x, y, radio + 40, "white");//Circunferencia más grande, como si fuera el fondo
    circunferencias(x, y, radio + 31, "black");//  circunferencia que hace de borde a la circunferencia posterior
    circunferencias(x, y, radio + 30, "black");// circunferencia 
    circunferencias(x, y, radio + 21, "black");//  circunferencia que hace de borde a la circunferencia posterior
    circunferencias(x, y, radio + 20, "lightblue");//Circunferencia más grande, como si fuera el fondo
    circunferencias(x, y, radio + 11, "black");// circunferencia que hace de borde a la circunferencia posterior
    circunferencias(x, y, radio + 10, "red");// circunferencia mediana de la diana
    circunferencias(x, y, radio + 1, "black");// circunferencia que hace de borde a la circunferencia posterior
    circunferencias(x, y, radio, "yellow");//la más pequeña se sobrepone , para denotar la accion del mouse
}
function sortearPosicion(min, max) {//el max esta definido más abajo, recibe ese valor para ejecutarse
    return Math.floor(Math.random() * (max - min + 1) + min);;//floor redondea hacia abajo, llega hasta maximo
}
function actualizarPantalla() {
    limpiarPantalla();
    xAleatorio = sortearPosicion(50, 500);//envia 570 como max a la funcion en x y guarda el valor aleatorio x
    yAleatorio = sortearPosicion(50, 300);//envia 370 como min a la funcion en y y guarda el valor aleatorio y
    diana(xAleatorio, yAleatorio);// los valores guardados anteriormente pasan a los parametros de la función
}

window.addEventListener("DOMContentLoaded", function () {
    contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        contexto.fillStyle = "lightgrey";
        contexto.fillRect(0, 0, 600, 400);//dibuja rectangulo gris 
        setInterval(actualizarPantalla, 1000);//hace q una función se repita con un tiempo de retraso entre cada ejecución mS
    }
});
