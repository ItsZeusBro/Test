import * as assert  from "node:assert";
import { RefinedTypes } from "../RefinedTypes.js";

export class Array{
    //min and max are kickers if map is a type array
    constructor(min=1, max=2, map=[]){
        this.min = min
        this.max = max
        this.v_max = this.max

        this.map = map
        this.refinedTypes;
        this.v_map;
        if(map.length){
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
        //return true if it is an array
        	//n_min means assert that array arr.length is greater than n_min
		//n_max means assert that array arr.length is less than n_max
        if(array&&this.min&&this.max&&this.map){
            try{
                //check to make sure that pattern in map matches the type pattern in the array
                for(var i = 0; i<array.length; i++){

                }
			}catch(err){
				return false
			}
        }
		else if(array && this.min && this.max){
			try{
				assert.equal(this._isArray(array), true)
				assert.equal(array.length>=this.min, true)
				assert.equal(array.length<=this.max, true)
			}catch(err){
				return false
			}
		}else if(array && this.min){
			try{
				assert.equal(this._isArray(array), true)
				assert.equal(array.length>=this.min, true)
			}catch(err){
				return false
			}
		}else if(array && this.max){
			try{
				assert.equal(this._isArray(array), true)
				assert.equal(array.length<=this.max, true)
			}catch(err){
				return false
			}
		}else if(array){
			try{
				assert.equal(this._isArray(array), true)
			}catch(err){
				return false
			}
		}else{
			return false
		}
		return true
    }
    _isArray(array){
		return Array.isArray(array)
	}
    context(){
        return {
            'min':this.min,
            'max':this.max,
            'map':this.map,        
        }
    }
    exists(){return true}
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}

