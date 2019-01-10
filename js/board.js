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

    printBoard(board = new Array()){

        /*
        let html = "";

        for(let col of board)
            html+=`<h4>${col.toString()}</h4>`;

        document.querySelector(".board").innerHTML = html;
        */


        let htmlBoard = document.querySelector(".board");
        while(htmlBoard.firstChild)
            htmlBoard.removeChild(htmlBoard.firstChild)

        board.map( cols => {
            cols.map( cells => {
                let newElement = document.createElement("div");
                let cssClass = "none";

                if(cells == 1)
                    cssClass = "snake"
                else if(cells ==2)
                    cssClass = "dot"

                newElement.classList.add(cssClass);
                
                htmlBoard.appendChild(newElement);

            });
        })

    }

}