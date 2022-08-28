import * as assert  from "node:assert";

export class Integer{
    constructor(min, max){
        this.min=min
        this.max=max
    }
    context(){
        return {
            'min':this.min,
            'max':this.max,
        }
    }
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}