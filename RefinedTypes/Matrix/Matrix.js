import * as assert  from "node:assert";

export class _Matrix{
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
    exists(){return true}
    is(matrix){
        //return true if it is an matrix
    }
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}