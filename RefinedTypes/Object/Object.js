import * as assert  from "node:assert";

export class _Object{
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
    is(object){
        //return true if it is an object
    }
    exists(){return true}
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}