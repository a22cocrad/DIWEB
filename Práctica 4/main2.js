/**
 * @author: Adrián Cordovero Crespo
 */

const elemento = document.getElementById('canvas');
const contexto = elemento.getContext('2d');
elemento.width = window.innerWidth;
elemento.height = window.innerHeight;


class cuadrado {
    // Constructor de cuadrados
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        // Método que nos pinta los cuadrados
        contexto.fillStyle = "rgba(0,140,200,1)";
        contexto.fillRect(this.x, this.y, this.width, this.height);
    }

    getCenter() {
        // Método que nos devuelve el centro del cuadrado
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        }
    }
}

function drawConnection(cuadradoA, cuadradoB) { 
    //Obtenemos los centros de los cuadrados
    const centerA = cuadradoA.getCenter();
    const centerB = cuadradoB.getCenter();

    // Pintamos las lineas que conectan los cuadrads
    contexto.beginPath(); // Iniciamos el camino
    contexto.moveTo(centerA.x, centerA.y); // "Nos movemos" al centro de el cuadradoA
    contexto.lineTo(centerB.x, centerB.y); // Trazamos la linea hacia el centro del cuadradoB
    contexto.strokeStyle = "rgba(255,0,0,1)";
    contexto.lineWidth = 3; // Grosor de las lineas
    contexto.stroke(); // Pinta el camino
}

const cuadrados = [ // Creamos el array con los cuadrados
    new cuadrado(100, 100, 50, 50),
    new cuadrado(200, 100, 50, 50),
    new cuadrado(250, 300, 50, 50),
    new cuadrado(350, 300, 50, 50)
];

cuadrados.forEach(cuadrado => cuadrado.draw());

for (let i = 0; i < cuadrados.length; i++) {
    for (let j = i + 1; j < cuadrados.length; j++) {
        drawConnection(cuadrados[i], cuadrados[j]);
    }
}
