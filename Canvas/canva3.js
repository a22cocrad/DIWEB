
function cargaContextoCanvas(IdCanvas) {
    let elemento = document.getElementById(IdCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext("2d");
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

window.addEventListener("DOMContentLoaded", () => {
    let contexto = cargaContextoCanvas("micanvas");
    if (contexto) {
        cuadradosAleatorios(contexto);
        setInterval(cuadradosAleatorios,10,contexto);
    }
});

function aleatorio(inferior, superior) {
    let numPosib = superior - inferior;
    let random = Math.random() * numPosib;
    return parseInt(random)+inferior;
}

function colorAleatorio() {
    return "rgb(" + aleatorio(0, 255) + "," + aleatorio(0, 255) + "," + aleatorio(0, 255) + ")";
}

function cuadradosAleatorios(contexto) {
    for (i = 0; i < 500; i += 10) {
        for (j = 0; j < 500; j += 10) {
            contexto.fillStyle = colorAleatorio();
            contexto.fillRect(i, j, 10, 10)
        }
    }
}