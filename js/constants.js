"use strict";

const size = {
    width: 12,
    heigth: 12
}

//Coordenada a la que avanza la serpiente segun su direccion
const movement = {
    ArrowUp: { x: 0, y: -1 },
    ArrowRight: { x: 1, y: 0 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
}

const turn = {
    ArrowUp: "ArrowDown",
    ArrowRight: "ArrowLeft",
    ArrowDown: "ArrowUp",
    ArrowLeft: "ArrowRigth",
}