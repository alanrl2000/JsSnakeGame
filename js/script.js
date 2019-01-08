"use strict";

let game = new Snake(5, 5, 11, 11);
let board = Board.prototype.init(11, 11);

let setBoard = (x, y) => {
    board[y][x] = 1;
    board[game.dot.y][game.dot.x] = 2;
}

document.addEventListener("keydown", function(event){
    if(movement[event.key])
        if(game.long == 1)
            game.direction = event.key;
        else if(turn[game.direction] != event.key)
            game.direction = event.key;
});

setInterval(function(){

    game.start(setBoard, function(){

        Board.prototype.printBoard(board);
        board = Board.prototype.init(11, 11);
    
    })

}, 500);


