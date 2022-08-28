import * as assert  from "node:assert";

export class Integer{
    constructor(){

    }
    context(){
        return {
            'min':undefined,
            'max':undefined,
        }
    }
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}