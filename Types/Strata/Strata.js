import * as assert  from "node:assert";

export class Strata{
    constructor(){

    }
    
    context(){
        return {
            'min':undefined,
            'max':undefined,
            'descending':false,
            'depth':undefined,
            'payload':'payload',
            'map':{
                //strata can have a key arrangement that is recursive,
                //but doesnt need to
            },
            'array':false,
            'object':false,
            'string':false,
            'matrix':false,
            'strata':false,
            'linkList':false,
            'null':false
        }
    }
    exists(){return true}
    is(strata){
        //return true if it is an strata
    }
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}