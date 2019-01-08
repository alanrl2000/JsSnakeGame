"use strict";

class Snake{

    constructor(initX, initY, height, width){

        this.long = 1;
        this.speed = 1;
        this.itIsAlive = true;
        this.direction = "ArrowUp";
        this.position = new Array({ x: initX, y: initY});
        this.boardSize = {
            height: height,
            width: width
        };
        this.dot = {
            x: (Math.floor(Math.random()*100))%(this.boardSize.width),
            y: (Math.floor(Math.random()*100))%(this.boardSize.height)
        }

    }

    move(){

        let newPosition = {
            x: this.position[0].x + movement[this.direction].x,
            y: this.position[0].y + movement[this.direction].y
        };

        if(newPosition.x > this.boardSize.width-1 ||
            newPosition.x < 0 ||
            newPosition.y > this.boardSize.height-1 ||
            newPosition.y < 0)
            this.itIsAlive = false;

        for(let pos of this.position){
            if(pos.x == newPosition.x && pos.y == newPosition.y){
                this.long = 1;
            }
        }
        this.position.unshift(newPosition);

        this.clear();
        if(newPosition.x == this.dot.x && newPosition.y == this.dot.y)
            this.eat();

    }

    eat(){

        this.long++;
        this.clear();
        this.dot = {
            x: (Math.floor(Math.random()*100))%(this.boardSize.width),
            y: (Math.floor(Math.random()*100))%(this.boardSize.height)
        }

    }

    print(callback){

        for(let pos of this.position)
            if(this.itIsAlive)
                callback(pos.x, pos.y);

    }

    start(positions, cb){
        
        if(this.itIsAlive){
            this.move();
            this.print(positions);
            cb();
        }

    }

    clear(){

        while(this.position.length > this.long)
            this.position.pop();
        
    }


}

//Pruebas

/*
let snake = new Snake(new Data(3,3,2));

snake.add(new Data(4,5,3));
snake.add(new Data(6,7,1));

console.log(snake);
console.log(snake.getData());

snake.updateData(new Data(6, 67, 0));

console.log(snake);
console.log(snake.getData());

*/