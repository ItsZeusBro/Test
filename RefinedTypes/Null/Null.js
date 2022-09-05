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

    random(){return this.nullTypes[new _Integer()._randomRange(0, this.nullTypes.length-1)]}

    context(nullType){
        return {
            'type':'null',
            'data':nullType,
            'nullTypes':this.nullTypes
        }
    }
    assert(nullType){
        assert.equal(this.nullTypes.includes(nullType), true)
        return true
    }
    is(nullType){
        try{this.assert(nullType)}catch(err){return}
        return this.context(nullType)
    }

    log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}