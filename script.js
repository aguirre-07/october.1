// ==========================================
// ELEMENTOS
// ==========================================

const inicio =
    document.getElementById("inicio");

const contenido =
    document.getElementById("contenido");

const botonComenzar =
    document.getElementById("botonComenzar");

const botonMusica =
    document.getElementById("botonMusica");

const musica =
    document.getElementById("musica");

const hojas =
    document.getElementById("hojas");


// ==========================================
// COMENZAR EXPERIENCIA
// ==========================================

botonComenzar.addEventListener("click", () => {

    inicio.classList.add("ocultar");

    contenido.classList.add("mostrar");


    // Iniciar música

    musica.play().catch(() => {

        console.log(
            "El navegador bloqueó la reproducción."
        );

    });


    // Crear primeros corazones

    setTimeout(() => {

        crearVariosCorazones();

    }, 3000);

});


// ==========================================
// CONTROL DE MÚSICA
// ==========================================

botonMusica.addEventListener("click", (event) => {

    event.stopPropagation();

    if (musica.paused) {

        musica.play();

        botonMusica.textContent = "♫";

    } else {

        musica.pause();

        botonMusica.textContent = "▶";

    }

});


// ==========================================
// CREAR HOJAS
// ==========================================

const simbolosHojas = [
    "🍂",
    "🍁",
    "🍂"
];


function crearHoja() {

    // No crear hojas antes de comenzar

    if (
        !contenido.classList.contains("mostrar")
    ) {
        return;
    }


    const hoja =
        document.createElement("div");

    hoja.classList.add("hoja");


    hoja.textContent =
        simbolosHojas[
            Math.floor(
                Math.random() *
                simbolosHojas.length
            )
        ];


    // Posición horizontal

    hoja.style.left =
        Math.random() * 100 + "vw";


    // Tamaño

    hoja.style.fontSize =
        Math.random() * 15 +
        15 +
        "px";


    // Duración de caída

    const duracion =
        Math.random() * 5 + 7;

    hoja.style.animationDuration =
        duracion + "s";


    // Movimiento lateral

    hoja.style.setProperty(
        "--movimiento",
        Math.random() * 180 -
        90 +
        "px"
    );


    document.body.appendChild(hoja);


    setTimeout(() => {

        hoja.remove();

    }, duracion * 1000);

}


// Nueva hoja cada cierto tiempo

setInterval(() => {

    crearHoja();

}, 700);


// ==========================================
// CORAZONES
// ==========================================

function crearCorazon(x, y) {

    const corazon =
        document.createElement("div");


    corazon.classList.add("corazon");


    const simbolos = [
        "🤍",
        "🤍",
        "🤍",
        "🍂"
    ];


    corazon.textContent =
        simbolos[
            Math.floor(
                Math.random() *
                simbolos.length
            )
        ];


    corazon.style.left =
        x + "px";

    corazon.style.top =
        y + "px";


    corazon.style.fontSize =
        Math.random() * 16 +
        20 +
        "px";


    corazon.style.setProperty(
        "--movimiento",
        Math.random() * 140 -
        70 +
        "px"
    );


    document.body.appendChild(corazon);


    setTimeout(() => {

        corazon.remove();

    }, 2400);

}


// ==========================================
// VARIOS CORAZONES
// ==========================================

function crearVariosCorazones() {

    const centroX =
        window.innerWidth / 2;

    const centroY =
        window.innerHeight / 2;


    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            crearCorazon(
                centroX +
                Math.random() * 180 -
                90,

                centroY +
                Math.random() * 100
            );

        }, i * 120);

    }

}


// ==========================================
// CORAZONES AL TOCAR LA PANTALLA
// ==========================================

document.addEventListener("click", (event) => {

    if (
        !contenido.classList.contains("mostrar")
    ) {
        return;
    }


    if (
        event.target === botonMusica
    ) {
        return;
    }


    for (let i = 0; i < 5; i++) {

        setTimeout(() => {

            crearCorazon(

                event.clientX +
                Math.random() * 30 -
                15,

                event.clientY +
                Math.random() * 30 -
                15

            );

        }, i * 70);

    }

});