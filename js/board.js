"use strict";


//Arreglo donde se dibujara la serpiente
class Board{

    init(height, width){

        
        let array = (new Array(height)).fill(0);
        
        array = array.map( () => {
            
            return (new Array(width)).fill(0);

        });

        return array;

    }


    //Temp func
    printBoard(board = new Array()){

        board.map( value => {
            console.log(value);
        });

    }

}