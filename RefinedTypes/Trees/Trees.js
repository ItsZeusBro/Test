import * as assert  from "node:assert";

export class _Tree{
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
                //pattern for each layer of the tree
                //if keys map not used, then normal payload schema will be used with
                //either defined payload key or default payload key
            },
            //these would all be in the payload section
            'array':false,
            'object':false,
            'string':false,
            'matrix':false,
            'strata':false,
            'linkList':false,
            'null':false

        }
    }

    is(tree){
        //return true if it is an tree
    }

    exists(){return true}
    
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
   
}