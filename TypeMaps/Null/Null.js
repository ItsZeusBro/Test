import * as assert  from "node:assert";
import { _Integer } from "../Integer/Integer.js";

export class _Null{
    constructor(nullTypes=[null, NaN, 0, '0', false]){
        try{
            if(nullTypes.includes(undefined)){throw Error('nullTypes cannot contain undefined')}
        }catch{
            throw Error('nullTypes must be of type array')
        }
        this.nullTypes=nullTypes
    }

    context(nullType){
        return {
            'type':'null',
            'null':nullType,
            'nullTypes':this.nullTypes
        }
    }

    exists(){return true}

    is(nullType){
        try{
            assert.equal(this.nullTypes.includes(nullType), true)
        }catch(err){
            return
        }
        return this.context(nullType)
    }

    randomNull(){return this.nullTypes[new _Integer().randomRange(0, this.nullTypes.length-1)]}

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}