const filas = 15;
const columnas = 15;
const oceano = new Array(filas);
let cont = 0;
let aciertos = 0;

for (let i = 0; i < filas; i++) {
    oceano[i] = new Array(columnas).fill(0);
}

do {
    const randomFilas = Math.floor(Math.random() * filas);
    const randomColumnas = Math.floor(Math.random() * columnas);

    if (oceano[randomFilas][randomColumnas] == 0) {
        oceano[randomFilas][randomColumnas] = 1;

        console.log(`${randomFilas}-${randomColumnas}`)

        cont++;
    }

} while (cont < 5)

console.table(oceano);

const tablero = document.getElementById("oceano");

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        const cuadro_tablero = document.createElement("div");

        cuadro_tablero.classList.add("oculto");
        cuadro_tablero.id = "cuadro_tablero" + i + "-" + j;

        tablero.appendChild(cuadro_tablero);
    }
}

function disparar() {

    let filaIntroducida;
    let columnaIntroducida;

    let cuadro_elegido;

    do {
        filaIntroducida = parseInt(window.prompt(`Introduzca la fila (entre 0 y ${filas - 1})`));
        columnaIntroducida = parseInt(window.prompt(`Introduzca la columna (entre 0 y ${columnas - 1})`));

        if (filaIntroducida < 0 && filaIntroducida > 14) {
            window.alert(`La fila debe estar comprendida entre 0 y ${filas - 1}`);
        }
        else if (columnaIntroducida < 0 && columnaIntroducida > 15) {
            window.alert(`La columna debe estar comprendida entre 0 y ${columnas - 1}`);
        }

        cuadro_elegido = document.getElementById("cuadro_tablero" + filaIntroducida + "-" + columnaIntroducida);

        if (cuadro_elegido.classList.contains("disparado")) {
            window.alert(`No se puede volver a disparar sobre una misma casilla`);
        }

    } while (filaIntroducida < 0 && filaIntroducida > 14 && columnaIntroducida < 0 && columnaIntroducida > 15);

    if (oceano[filaIntroducida][columnaIntroducida] == 1) {
        cuadro_elegido.classList.add("acierto");
        aciertos++
        cuadro_elegido.classList.add("disparado");
    }
    else {
        cuadro_elegido.classList.add("agua");
        cuadro_elegido.classList.add("disparado");
    }

    if (aciertos == 3) {
        window.alert("Has ganado");
        document.getElementById("boton").disabled = true;
    }

}

