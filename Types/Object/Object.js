import * as assert  from "node:assert";

class Object{
    constructor(){

    }
    isObject(obj, w_min, w_max, d_min, d_max, n=0, maxdepth=[0], truth=[true]){
		if(!truth[0]){return false}
		if((this._isObject(obj)) &&(d_max||d_min)&&(n>=maxdepth[0])){maxdepth[0]=n}

		if((this._isObject(obj)) && Object.keys(obj).length){
			if(w_min||w_max||d_max||d_min){
				var i;
				if(d_max||d_min){
					for(i = 0; i<Object.keys(obj).length; i++){
						this.isObject(obj[Object.keys(obj)[i]], w_min, w_max, d_min, d_max, n+1, maxdepth, truth)
					}
				}
				if(w_min){
					try{
						assert.equal((Object.keys(obj).length)>=w_min, true)
					}catch(err){
						truth[0]=false
						return truth[0]
					}
				}
				if(w_max){
					try{
						assert.equal((Object.keys(obj).length)<=w_max, true)
					}catch(err){
						truth[0]=false
						return truth[0]
					}
				}
			}else{
				return truth[0]
			}
		}else{
			return truth[0]
		}

		if(n==0){
			if(d_max){
				try{
					assert.equal(maxdepth[0]<=d_max, true)
				}catch(err){
					truth[0]=false;
					return truth[0];
				}
			}
			if(d_min){
				try{
					assert.equal(maxdepth[0]>=d_min, true)
				}catch(err){
					truth[0]=false
				}
			}
		}
		return truth[0]
	}
    _isObject(obj){
		if(obj instanceof Object && obj!==null){
			return true
		}else{
			return false
		}
	}

    assertObjectWidth(atDepth){
        
    }

    assertObjectTypePattern(){

    }

    randomObject(except, n=this.objWidth){
		var obj = {}
		for(var i = 0; i<n; i++){
			obj[this.randomString(n)]=this.random(undefined, n-1)
		}
		if(this.comparators.isEqual(obj, except)){
			return this.randomObject(except, n)
		}else{
			return obj
		}
	}

    randomObjectOfArrays(except, n){
		var arrObj={}
		for(var i=0; i<n; i++){
			arrObj[this.randomString(n)]=this.randomArray(n)
		}

		if(this.comparators.isEqual(arrObj, except)){
			return this.randomArrayObject(n, except)
		}else{
			return arrObj
		}
	}

    isEqual(obj1, obj2, equal=[true]){
		//assuming they are both objects, the keys should be equal arrays
		if(
			obj1
			&&
			obj2
			&&
			this.types.isObject(obj1)
			&&
			this.types.isObject(obj2)
			&&
			(Object.keys(obj1).length == Object.keys(obj2).length)
		){
			if(this._isEqualArray(Object.keys(obj1), Object.keys(obj2))){
				for(var i =0; i<Object.keys(obj1).length; i++){
					var key = Object.keys(obj1)[i]
					if(this.isEqual(obj1[key], obj2[key])){
						return equal[0]
					}else{
						equal[0]=false
						return false
					}
				}
			}else{
				equal[0]=false
				return false
			}
		}else{
			equal[0]=false
			return false
		}
		return equal[0]
	}
}