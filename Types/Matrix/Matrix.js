import * as assert  from "node:assert";

export class Matrix{
    constructor(){

    }

    context(){
        return {
            'min':undefined,
            'max':undefined,
            'descending':false,
            'depth':undefined,
            'payload':undefined,
            'map':{
                //this is a big subject
            }
        }
    }

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}