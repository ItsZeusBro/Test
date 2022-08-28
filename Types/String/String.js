import * as assert  from "node:assert";

export class String{
    constructor(){

    }
    context(){
        return {
            'min':undefined,
            'max':undefined,
            'pattern':undefined //some regex pattern (we need that regex generator for this feature)
        }
    }
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}