import * as assert  from "node:assert";

export class LinkList{
    constructor(min=1, max=2, map=['int', 'string', 'null', 'object', 'tree', 'array']){
        this.min = min
        this.max = max
        this.map = map
        this.v_max = this.max
    }

    reset(){
        this.v_max=this.max
    }
    dec(){
        if(this.v_max){
            this.v_max-=1
        }
    }
    
    context(){
        return {
            'min':this.min,
            'max':this.max,
            'map':this.map,        
        }
    }

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}