"use strict";

//Dimensiones
const size = { height: 10, width: 10 };

//Direcciones para un nodo de la serpiente
const directions = ["up", "right", "down", "left"];

//Movimiento en 'x' y 'y'
const movement = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    right: { x: 1, y: 0 },
    left: { x: -1, y: 0 },
}