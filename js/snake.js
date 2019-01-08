"use strict";

//Position y direccion de un nodo de la serpiente
class Data{

    constructor(x = 0, y = 0, direction = 0){

        this.x = x;
        this.y = y;
        this.direction = directions[direction];

    }

}

//Clase del control de los puntos de la serpiente
class Snake{

    constructor(data = new Data(), previous = null){
        
        this.previous = previous;
        this.data = data;

    }

    add(data = new Data()){

        this.previous = new Snake(this.data, this.previous);
        this.data = data;

    }

    updateDirection(newDirection = 0){

        if(this.previous)
            this.previous.updateDirection(
                directions.indexOf(this.data.direction)
            );
        this.data.direction = directions[newDirection];
        
    }

    updatePosition(newX = 0, newY = 0){

        if(this.previous)
            this.previous.updatePosition(
                this.data.x, this.data.y
            );
        this.data.x = newX;
        this.data.y = newY;

    }

    getData(){

        let previous = this.previous, array = [];

        array.push(new Data(
            this.data.x, this.data.y,
            directions.indexOf(this.data.direction)
        ));

        while(previous != null ){
            
            array.push(new Data(
                previous.data.x, previous.data.y,
                directions.indexOf(previous.data.direction)
            ));
            previous = previous.previous;

        };

        return array;

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