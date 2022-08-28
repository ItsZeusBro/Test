import * as assert  from "node:assert";

export class Object{
    constructor(){

    }

    context(){
        return {
            'min':undefined,
            'max':undefined,
            'map':{
                //you can map keys to types
                
            },
            'array':false,
            'string':false,
            'matrix':false,
            'strata':false,
            'linkList':false,
            'null':false
        }
    }

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}