"use strict";

class Snake{

    constructor(direction = "up", previous = null){
        this.mov = direction;
        this.prev = previous;
    }

    add(direction = "up"){
        return new Snake(direction, this);
    }

    update(direction){
        if(this.prev!=null){
            this.prev.update(this.mov);
            this.mov = direction;
        }else
            this.mov = direction;
    }

    getMoves(){
        if(this.prev != null)
            return `${this.mov},${this.prev.getMoves()}`.split(",");
        else
            return this.mov;
    }

}