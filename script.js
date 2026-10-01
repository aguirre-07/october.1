// =====================================
// HOJAS DE OTOÑO
// =====================================

const hojas = [
    "🍂",
    "🍁",
    "🍂"
];

function crearHoja() {

    const hoja =
        document.createElement("div");

    hoja.classList.add("hoja");

    hoja.textContent =
        hojas[
            Math.floor(
                Math.random() * hojas.length
            )
        ];

    hoja.style.left =
        Math.random() * 100 + "vw";

    hoja.style.fontSize =
        Math.random() * 14 + 15 + "px";

    const duracion =
        Math.random() * 5 + 7;

    hoja.style.animationDuration =
        duracion + "s";

    hoja.style.setProperty(
        "--movimiento",
        Math.random() * 200 - 100 + "px"
    );

    document.body.appendChild(hoja);

    setTimeout(() => {
        hoja.remove();
    }, duracion * 1000);
}

setInterval(crearHoja, 700);


// =====================================
// CORAZONES
// =====================================

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
                Math.random() * simbolos.length
            )
        ];

    corazon.style.left =
        x + "px";

    corazon.style.top =
        y + "px";

    corazon.style.fontSize =
        Math.random() * 15 + 20 + "px";

    corazon.style.setProperty(
        "--movimiento",
        Math.random() * 150 - 75 + "px"
    );

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 2500);
}


// =====================================
// CORAZONES AL TOCAR LA PANTALLA
// =====================================

document.addEventListener("click", (event) => {

    for (let i = 0; i < 6; i++) {

        setTimeout(() => {

            crearCorazon(
                event.clientX +
                Math.random() * 40 - 20,

                event.clientY +
                Math.random() * 40 - 20
            );

        }, i * 70);
    }
});


// =====================================
// CORAZONES AL INICIAR
// =====================================

window.addEventListener("load", () => {

    setTimeout(() => {

        for (let i = 0; i < 8; i++) {

            setTimeout(() => {

                crearCorazon(
                    window.innerWidth / 2 +
                    Math.random() * 200 - 100,

                    window.innerHeight * 0.65
                );

            }, i * 120);
        }

    }, 3000);

});