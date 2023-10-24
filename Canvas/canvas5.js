function cargaContextoCanvas(IdCanvas) {
    let elemento = document.getElementById(IdCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto
        }
    }
    return false;
}


function aleatorio(inferior, superior) {
    let numPosib = superior - inferior;
    let random = Math.random() * numPosib;
    return parseInt(random) + inferior;
}

function colorAleatorio() {
    return "rgb(" + aleatorio(0, 255) + "," + aleatorio(0, 255) + "," + aleatorio(0, 255) + ")";
}

function dibujar() {
    let contexto = cargaContextoCanvas("micanvas");
    contexto.clearRect(0, 0, micanvas.width, micanvas.height); // Corrección de "micanvas.heigth" a "micanvas.height"
    contexto.save();
    let time = new Date();
    contexto.translate(150, 150);
    contexto.rotate((360 * Math.PI / 180) * time.getMilliseconds() / 1000);
    contexto.translate(-150, -150);

    let lineGrad = contexto.createLinearGradient(150, 81, 150, 268); // Corrección de "createLinearGradiente" a "createLinearGradient"
    lineGrad.addColorStop(0, "#ffbc40");
    lineGrad.addColorStop(1, "#ffd890");
    contexto.fillStyle = lineGrad;
    contexto.fillRect(50, 50, 200, 200);
    contexto.fill();
    contexto.lineWidth = 2;
    contexto.strokeStyle = colorAleatorio();
    contexto.strokeRect(50, 50, 200, 200);
    contexto.stroke();

    contexto.fillStyle = "grey";
    contexto.fillRect(100, 120, 10, 20);
    contexto.fill();

    contexto.fillRect(190, 120, 10, 20);
    contexto.fill();

    contexto.restore();

    window.requestAnimationFrame(dibujar);


}
window.addEventListener("DOMContentLoaded", function () {
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        dibujar();
    }
});