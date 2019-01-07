"use strict";


const player = new Player(new Data(10,10));

player.move();
console.log("-------------------");
player.snake.add(new Data(
    player.snake.data.x,
    player.snake.data.y-1,
    directions.indexOf(player.snake.data.direction)
    ));
player.move();
console.log("-------------------");
player.snake.add(new Data(
    player.snake.data.x,
    player.snake.data.y-2,
    directions.indexOf(player.snake.data.direction)
    ));
player.move();
console.log("-------------------");
player.move();

console.log("-------------------");
player.move();
player.turn(1);
console.log("-------------------");
player.move();
console.log("-------------------");
player.move();
console.log("-------------------");
player.move();