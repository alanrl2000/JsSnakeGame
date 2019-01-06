//Direcciones para avanzar
const direction = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    right: { x: 1, y: 0 },
    left: { x: -1, y: 0 },
};

//Cambio de direccion
const turn = {
    up: { 
        ArrowRight: "right", ArrowLeft: "left",
        ArrowUp: "up", ArrowDown: "up" },
    down: { 
        ArrowRight: "right", ArrowLeft: "left",
        ArrowUp: "down", ArrowDown: "down" },
    right: { 
        ArrowRight: "right", ArrowLeft: "right",
        ArrowUp: "up", ArrowDown: "down" },
    left: { 
        ArrowRight: "left", ArrowLeft: "left",
        ArrowUp: "up", ArrowDown: "down" },
};