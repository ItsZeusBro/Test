import * as assert  from "node:assert";

export class Null{
    constructor(){

    }

    context(){
        return {
            'types':[null, NaN, 0, '0', false]
        }
    }

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}