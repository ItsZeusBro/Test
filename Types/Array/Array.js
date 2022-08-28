import * as assert  from "node:assert";

export class Array{
    //min and max are kickers if map is a type array
    constructor(min=1, max=3, map=['int', 'string', 'null']){
        this.min = min
        this.max = max
        this.map = map
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

