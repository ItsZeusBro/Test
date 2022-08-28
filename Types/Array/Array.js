import * as assert  from "node:assert";

export class Array{
    constructor(descriptor){

    }
    
    context(){
        return {
            'min':undefined,
            'max':undefined,
            'map':{
                //you can map an array to types or patterns
                'types':[],//whatever types or pattern here
                'n':undefined
            },
            'object':false,
            'string':false,
            'tree':false,
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

