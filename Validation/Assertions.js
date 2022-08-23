import * as assert  from "node:assert";

export class Assertions{
    constructor(){

    }
    _getStratumWidth(objOrArray, payload){
		var count = 0;
		if(Array.isArray(objOrArray)){
			for(var i = 0; i<objOrArray.length; i++){
				var val = objOrArray[i]
				if(typeof val === 'object'){
					//make we only count objects towards the width
					count+=1
				}
			}
			return count
		}else if(typeof objOrArray==='object'){
			for(var i = 0; i<Object.keys(objOrArray).length; i++){
				var key = Object.keys(objOrArray)[i]
				var val = objOrArray[key]
				if(Array.isArray(val)&&(!payload['keys'].includes(key))){
					//make we only count arrays towards the width
					count+=1
				}
			}
			return count
		}else{
			return 0
		}
	}

    stratumArrayWidth(array, aw_min, aw_max, payload){
		if(aw_min&& aw_max){
			try{
				assert.equal(this._getStratumWidth(array, payload)>=aw_min, true)
				assert.equal(this._getStratumWidth(array, payload)<=aw_max, true)
			}catch{
				return false
			}
		}else if(aw_min){
			try{
				assert.equal(this._getStratumWidth(array, payload)>=aw_min, true)
			}catch{
				return false
			}
		}else if(aw_max){
			try{
				assert.equal(this._getStratumWidth(array, payload)<=aw_max, true)
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
				assert.equal(this._getStratumWidth(obj, payload)>=ow_min, true)
				assert.equal(this._getStratumWidth(obj, payload)<=ow_max, true)
			}catch{
				return false
			}
		}else if(ow_min){
			try{
				assert.equal(this._getStratumWidth(obj, payload)>=ow_min, true)
			}catch{
				return false
			}
		}else if(ow_max){
			try{
				assert.equal(this._getStratumWidth(obj, payload)<=ow_max, true)
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

    objectDepth(obj, d_min, d_max, n=0, d=[0]){
        if(typeof obj === 'object'){
            for(var i = 0; i<Object.keys(obj).length; i++){
                var key = Object.keys(obj)[i]
                var val = obj[key]
                this.objectDepth(val, d_min, d_max, n+1, d)
            } 
        }
        if(n>=d[0]){d[0]=n}

        if(n==0){
            try{
                console.log('here', d[0])
				assert.equal(d[0]>=d_min, true)
				assert.equal(d[0]<=d_max, true)
                return true
			}catch{
				return false
			}
        }
    }

    objectWidth(){

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