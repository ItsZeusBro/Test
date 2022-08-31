import * as assert  from "node:assert";
import { RefinedTypes } from "../RefinedTypes.js";

export class _Array{
    //min and max are kickers if map is a type array
    constructor(min, max, map=undefined){
        this.min = min
        this.max = max
        this.v_max = this.max

        this.map = map
        this.refinedTypes;
        this.v_map;
        if(map && map.length){
            //this ensures we dont have an infinite circular dependency 
            this.refinedTypes = new RefinedTypes()
            this.v_map = this.vMap(map)

        }
    }

    vMap(map){
        //create a Types map for type checking
        var v_map=[]
        for(var i=0; i<map.length; i++){
            v_map.push(this.refinedTypes.typeOf(map[i]))
        }
    }

    reset(){
        this.v_max=this.max
    }

    dec(){
        if(this.v_max){
            this.v_max-=1
        }
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

    _isArray(array){
		return Array.isArray(array)
	}

    context(array){
        return {
            'type':'array',
            'array':array,
            'min':this.min,
            'max':this.max,
            'map':this.map  
        }
    }

    exists(){return true}

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}

