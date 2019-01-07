"use strict";

class Player{

    constructor(data = new Data()){

        this.snake = new Snake(data);
        this.live = true;
        console.log(this.snake);
    }

    move(){

        let array = Board.prototype.init(
            size.height, size.width);

        let nodes = this.snake.getData();
        console.log(nodes);
        nodes.map( value => {
            console.log(value);
            value.x += movement[value.direction].x;
            value.y += movement[value.direction].y;

            this.snake.updatePosition(value.x, value.y);

        });

        this.snake.updateDirection(
            directions.indexOf(this.snake.data.direction)
        );

        this.drawSnake(array);

        Board.prototype.printBoard(array);

    }

    turn(direction = 0){

        this.snake.updateDirection(direction);

    }

    drawSnake(board = new Array()){

        let nodes = this.snake.getData();

        nodes.map( value => {
            console.log(value);
            
            if(
                value.x >= 0 && value.x <= size.width &&
                value.y >= 0 && value.y <= size.height
            )
                board[value.y][value.x] = 1;
            else
                this.life = false;

        });

    }

}