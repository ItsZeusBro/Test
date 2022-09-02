import * as assert  from "node:assert";
import { _Integer } from "../Integer/Integer.js";

export class _Array{
    constructor(min, max, map){
        this.min = min
        this.max = max
        this.map = map
        //a map for an array would have an array of types that are possible values for the array
        //{'types':[new _Integer(0, 5000), new _String(0, 10)]}

    }


    is(array){
        if(array){
            try{
                assert.equal(this._isArray(array), true)
            }catch{
                return
            }

            if(this.min){
                try{
                    assert.equal(this.min <= array.length, true)
                }catch{
                    return
                }
            }

            if(this.max){
                try{
                    assert.equal(this.max >= array.length, true)
                }catch{
                    return
                }
            }
            return this.context(array)
        }
    }

    random(min, max){
        //generate random array of length range(min, max) of types in map
        var _min; var _max; var arr = [];
        if(min){_min=min}else if(this.min){_min=this.min}else{_min=0}
        if(max){_max=max}else if(this.max){_max=this.max}else{_max=10000}
        var n = new _Integer().randomRange(_min, _max)
        for (var i = 0; i<n; i++){
            var type = this.randomSample(this.map['types'])
            arr.push(type.random())
        }
        return arr
    }
    randomSample(arr){return arr[new _Integer().randomRange(0, arr.length-1)]}

    _isArray(array){return Array.isArray(array)}

    context(array){
        return {
            'type':'array',
            'array':array,
            'min':this.min,
            'max':this.max,
            'map':this.map  
        }
    }

    log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}

