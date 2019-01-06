"use strict";

const board = document.querySelector(".board");
const size = { width: 20, height: 10 };
let initX = 10, initY = 5, tempX = initX, tempY = initY;

//Creando el tablero
let arr;

function setBoard(){
    arr = [];
    for(let i = 0; i < size.height; i++){
        arr.push([]);
        for(let j = 0; j < size.width; j++)
            arr[i].push(0);
    }
}

setBoard();
console.log(arr);

let snake = new Snake();
snake = snake.add(snake.mov);
snake = snake.add(snake.mov);

function a(){

    setBoard();
    
    snake.getMoves().map( (value, index) => {
        let x = direction[value].x;
        let y = direction[value].y;
    
        if(index==0){
            x += initX;
            y += initY;
            initX = tempX = x;
            initY = tempY = y;
        }else{
            x += tempX;
            y += tempY;
            tempX = x;
            tempY = y;
        }
    
        arr[y][x] = 1;
    
    });       
    
    console.log(JSON.stringify(arr));

    

};


document.addEventListener("keydown", function(event){
    if(event.key.includes("Arrow"))
        snake.update(turn[snake.mov][event.key]);
});

