import * as assert  from "node:assert";

class Strata{
    constructor(){

    }
    isStratum(stratum, aw_min, aw_max, ow_min, ow_max, payload={'keys':['payload'], 'patterns':[]}){
		//Stratum is an array with an object or an object with an array 
		//(with or without other data types which are called 'payload').
		var count = 0;
		if(Array.isArray(stratum)){
			if((aw_min||aw_max)&&(!this.assertStratumWidth(stratum, aw_min, aw_max, payload))){return false}
			for(var i = 0; i<stratum.length; i++){
				var val=stratum[i]
				if(this.isObject(val)){
					count+=1
				}
			}
		}else if(this.isObject(stratum)){
			if((ow_min||ow_max)&&(!this.assertStratumWidth(stratum, ow_min, ow_max, payload))){return false}
			for(var i = 0; i<Object.keys(stratum).length; i++){
				var key = Object.keys(stratum)[i]
				var val = stratum[key]
				if( this.isArray(val) && !(payload['keys'].includes(key))){
					count+=1
				}
			}
		}else{
			return false
		}
		if(count){ return true }else{ return false }
	}

	isPureStratum(stratum, aw_min, aw_max, ow_min, ow_max, payload={'keys':['payload'], 'patterns':[]}){
		//is defined as a stratum not including any payload that is undefined for the given layer
		//all payload (non stratum) must be purely derived from payload structure
		var count=0;
		if(Array.isArray(stratum)){
			if((aw_min||aw_max)&&(!this.assertStratumWidth(stratum, aw_min, aw_max, payload))){return false}
			for(var i = 0; i<stratum.length; i++){
				var val = stratum[i];
				if(this.isObject(val)){
					count+=1
				}
			}
			return true
		}else if(this.isObject(stratum)){
			if((ow_min||ow_max)&&(!this.assertStratumWidth(stratum, ow_min, ow_max, payload))){return false}
			for(var i = 0; i<Object.keys(stratum).length; i++){
				var key = Object.keys(stratum)[i];
				var val = stratum[key];
				if( Array.isArray(val) && !(payload['keys'].includes(key))){
					count+=1
				}
			}
			return true
		}
		if(count){ return true }else{ return false }
	}

	inPayload(value, payload){
		for(var i = 0; i<payload.length; i++){
			if(payload.includes(value)){
				return true
			}
		}
		return false
	}

	inPatterns(value, patterns){
		for(var i = 0; i<patterns.length; i++){
			if(this.isString(value) && value.match(patterns[i])[0]){
				return true
			}
		}
		return false
	}

	//Valid strata has valid stratum at each recursive level. If there is any valid stratum, then it is valid strata
	//of depth n, where n represents the number of valid stratum in the recursive strata
	//Furthermore, strata can be pure or impure, where pure strata represents pure stratum at every recursive level
	//up until a base case is present (which cannot be stratum or pure stratum for pure strata)
	isPureStrata(strata, aw_min, aw_max, ow_min, ow_max, d_min, d_max, payload={'keys':['payload'], 'patterns':[]}){

	}

	isStrata(strata, aw_min, aw_max, ow_min, ow_max, d_min, d_max,  payload={'keys':['payload'], 'patterns':[]}, n=0, d=[0], truth=[true]){
		//depth should be updated first
		if(!truth[0]){return truth[0]}
		if(n>=d[0]){d[0]=n}
		//depth should be checked at each level of d
		if(this.isStratum(strata, aw_min, aw_max, ow_min, ow_max, payload)){
			if(Array.isArray(strata)){
				for(var i = 0; i<strata.length; i++){
					var val = strata[i]
					this.isStrata(val, aw_min, aw_max, ow_min, ow_max, d_min, d_max, payload, n+1, d, truth)
				}
			}else{
				var keys = Object.keys(strata)
				for(var i=0; i<keys.length; i++){
					var val=strata[keys[i]]
					this.isStrata(val, aw_min, aw_max, ow_min, ow_max, d_min, d_max, payload, n+1, d, truth)
				}
			}
		}else{
			//base case, make sure depth is greater than 0
			if(d[0]>0){
				return truth[0]
			}else{
				return false
			}
		}
		if(n==0&&(d_min||d_max)){
			return this.assertIntRange(d[0], d_min, d_max)
		}
		return truth[0]
	}

    assertStratumWidth(stratum, min, max, payload){
        if(this._isArray(stratum)){
            return this.assertStratumArrayWidth(stratum, min, max, payload)
        }else if(this._isObject(stratum)){
            return this.assertStratumObjectWidth(stratum, min, max, payload)
        }else{
            return false
        }
    }

    assertStratumArrayWidth(array, aw_min, aw_max, payload){
		if(!this._isArray(array)){return false}
		if(aw_min&& aw_max){
			try{
				assert.equal(this.getStratumWidth(array, payload)>=aw_min, true)
				assert.equal(this.getStratumWidth(array, payload)<=aw_max, true)
			}catch{
				return false
			}
		}else if(aw_min){
			try{
				assert.equal(this.getStratumWidth(array, payload)>=aw_min, true)
			}catch{
				return false
			}
		}else if(aw_max){
			try{
				assert.equal(this.getStratumWidth(array, payload)<=aw_max, true)
			}catch{
				return false
			}
		}else{
			return false
		}
		return true
	}

	assertStratumObjectWidth(obj, ow_min, ow_max, payload){
		if(!this._isObject(obj)){return false}

		if(ow_min&&ow_max){
			try{
				assert.equal(this.getStratumWidth(obj, payload)>=ow_min, true)
				assert.equal(this.getStratumWidth(obj, payload)<=ow_max, true)
			}catch{
				return false
			}
		}else if(ow_min){
			try{
				assert.equal(this.getStratumWidth(obj, payload)>=ow_min, true)
			}catch{
				return false
			}
		}else if(ow_max){
			try{
				assert.equal(this.getStratumWidth(obj, payload)<=ow_max, true)
			}catch{
				return false
			}
		}else{
			return false
		}
		return true
	}

    getStratumWidth(objOrArray, payload){
		var count = 0;
		if(this.validation._isArray(objOrArray)){
			for(var i = 0; i<objOrArray.length; i++){
				var val = objOrArray[i]
				if(this.validation._isObject(val)){
					//make we only count objects towards the width
					count+=1
				}
			}
			return count
		}else if(this.validation._isObject(objOrArray)){
			for(var i = 0; i<Object.keys(objOrArray).length; i++){
				var key = Object.keys(objOrArray)[i]
				var val = objOrArray[key]
				if(this.validation._isArray(val)&&(!payload['keys'].includes(key))){
					//make we only count arrays towards the width
					count+=1
				}
			}
			return count
		}else{
			return 0
		}
	}

    getStrataDepth(objOrArray, payload, n=0, d=[0]){
		if(this.validation._isArray(objOrArray)){
			for(var i = 0; i<objOrArray.length; i++){
				var val = objOrArray[i]
				if(this.validation._isObject(val)){
                    if(n>=d[0]){d[0]=n}
                    this.strataDepth(val, payload, n+1, d)
				}
			}
		}else if(this.validation._isObject(objOrArray)){
			for(var i = 0; i<Object.keys(objOrArray).length; i++){
				var key = Object.keys(objOrArray)[i]
				var val = objOrArray[key]
				if(this.validation._isArray(val)&&(!payload['keys'].includes(key))){
                    if(n>=d[0]){d[0]=n}
                    this.strataDepth(val, payload, n+1, d)
				}
			}
		}
        return d[0]
    }

    //TODO:
	randomStratum(n){

	}

	randomPureStratum(n){

	}

	randomPureStrata(){

	}
	randomStrata(n, payload={'keys':['payload'], 'patterns':[]}, except=undefined){

	}

	randomStrata(n, payload, strata){
		
	}

    isEqual(strata1, strata2, equal=[true]){

	}
}