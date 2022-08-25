import * as assert  from "node:assert";
import { Getters } from "./Getters.js";
export class Assertions{
    constructor(){
		this.getters = new Getters()
    }
    
    stratumWidth(stratum, min, max, payload){
        if(Array.isArray(stratum)){
            return this.stratumArrayWidth(stratum, min, max, payload)
        }else if(typeof stratum === 'object'){
            return this.stratumObjectWidth(stratum, min, max, payload)
        }else{
            return false
        }
    }

    stratumArrayWidth(array, aw_min, aw_max, payload){
		if(aw_min&& aw_max){
			try{
				assert.equal(this.getters.stratumWidth(array, payload)>=aw_min, true)
				assert.equal(this.getters.stratumWidth(array, payload)<=aw_max, true)
			}catch{
				return false
			}
		}else if(aw_min){
			try{
				assert.equal(this.getters.stratumWidth(array, payload)>=aw_min, true)
			}catch{
				return false
			}
		}else if(aw_max){
			try{
				assert.equal(this.getters.stratumWidth(array, payload)<=aw_max, true)
			}catch{
				return false
			}
		}else{
			return false
		}
		return true
	}

	stratumObjectWidth(obj, ow_min, ow_max, payload){
		if(ow_min&&ow_max){
			try{
				assert.equal(this.getters.stratumWidth(obj, payload)>=ow_min, true)
				assert.equal(this.getters.stratumWidth(obj, payload)<=ow_max, true)
			}catch{
				return false
			}
		}else if(ow_min){
			try{
				assert.equal(this.getters.stratumWidth(obj, payload)>=ow_min, true)
			}catch{
				return false
			}
		}else if(ow_max){
			try{
				assert.equal(this.getters.stratumWidth(obj, payload)<=ow_max, true)
			}catch{
				return false
			}
		}else{
			return false
		}
		return true
	}

	stringLength(str, str_min, str_max){
		if(str_min&& str_max){
			try{
				assert.equal(str.length>=str_min, true)
				assert.equal(str.length<=str_max, true)
			}catch{
				return false
			}
		}else if(str_min){
			try{
				assert.equal(str.length>=str_min, true)
			}catch{
				return false
			}
		}else if(str_max){
			try{
				assert.equal(str.length<=str_max, true)
			}catch{
				return false
			}
		}else{
			return false
		}
		return true
	}

	intRange(int, int_min, int_max){
		if(int_min&&int_max){
			try{
				assert.equal(int>=int_min, true)
				assert.equal(int<=int_max, true)
			}catch{
				return false
			}
		}else if(int_min){
			try{
				assert.equal(int>=int_min, true)
			}catch{
				return false
			}
		}else if(int_max){
			try{
				assert.equal(int<=int_max, true)
			}catch{
				return false
			}
		}else{
			return false
		}
		return true
	}

    treeDepth(obj, d_min, d_max){
        var get = new Getters()
        try{
            var d = get.treeDepth(obj)
            assert.equal(d>=d_min, true)
            assert.equal(d<=d_max, true)
            return true
        }catch{
            return false
        }
        
    }

    objectWidth(atDepth){
        
    }

    objectTypePattern(){

    }

    arrayTypePattern(){

    }

    arrayLength(){

    }


    //general assertions
    apply(func, on, assertion){
        //apply a function on a list, object, integer, function should return assertion value
    }

}

// var assertions = new Assertions()   
// console.log({'0':{'1':{'2':{}}}}, assertions.objectDepth({'0':{'1':{'2':{}}}}, 3, 3))