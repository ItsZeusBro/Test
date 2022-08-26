import * as assert  from "node:assert";
export class Types{
	constructor(){
	}
	//valid strata examples:
	//Strata can be explained as stratified schema, where layers are formed as either an object containing an array or an array
	//containing an object

	//============================================================================================
	//Type Checking

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

	isInteger(n, n_min, n_max){
		//ng means assert that integer n is greater than ng
		//nl means assert that integer n is less than nl

		if(n && n_min && n_max){
			try{
				assert.equal(this._isInteger(n), true)
				assert.equal(n>=n_min, true)
				assert.equal(n<=n_max, true)
			}catch(err){
				return false
			}
		}else if(n && n_min){
			try{
				assert.equal(this._isInteger(n), true)
				assert.equal(n>=n_min, true)
			}catch(err){
				return false
			}
		}else if(n && n_max){
			try{
				assert.equal(this._isInteger(n), true)
				assert.equal(n<=n_max, true)
			}catch(err){
				return false
			}
		}else if(n||n==0){
			try{
				assert.equal(this._isInteger(n), true)
			}catch(err){
				return false
			}
		}else{
			return false
		}
		return true
	}

	isNullType(n){
		//ng means assert that integer n is greater than ng
		//nl means assert that integer n is less than nl
		try{
			assert.equal([null, undefined, NaN, 0, '0'].includes(n), true)
		}catch(err){
			return false
		}

		return true
	}

	isArray(arr, n_min, n_max){
		//n_min means assert that array arr.length is greater than n_min
		//n_max means assert that array arr.length is less than n_max
		if(arr && n_min && n_max){
			try{
				assert.equal(this._isArray(arr), true)
				assert.equal(arr.length>=n_min, true)
				assert.equal(arr.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(arr && n_min){
			try{
				assert.equal(this._isArray(arr), true)
				assert.equal(arr.length>=n_min, true)
			}catch(err){
				return false
			}
		}else if(arr && n_max){
			try{
				assert.equal(this._isArray(arr), true)
				assert.equal(arr.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(arr){
			try{
				assert.equal(this._isArray(arr), true)
			}catch(err){
				return false
			}
		}else{
			return false
		}
		return true
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

	isString(str, n_min, n_max){
		if(str && n_min && n_max){
			try{
				assert.equal(this._isString(str), true)
				assert.equal(str.length>=n_min, true)
				assert.equal(str.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(str && n_min){
			try{
				assert.equal(this._isString(str), true)
				assert.equal(str.length>=n_min, true)
			}catch(err){
				return false
			}
		}else if(str && n_max){
			try{
				assert.equal(this._isString(str), true)
				assert.equal(str.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(str){
			try{
				assert.equal(this._isString(str), true)
			}catch(err){
				return false
			}
		}else{
			return false
		}
		return true
	}

	_isString(s) {
		return (s instanceof String || typeof(s) === 'string');
	}

	_isObject(obj){
		if(obj instanceof Object && obj!==null){
			return true
		}else{
			return false
		}
	}

	_isArray(arr){
		return Array.isArray(arr)
	}

	_isInteger(int){
		//console.log('_isInteger(',int,')', Number.isInteger(int))
		return (Number.isInteger(int));
	}
	

	isOfTypes(thing, types){
		for(var i = 0; i<types.length; i++){
			if(types[i]=='string'){
				if(this.isString(thing)){return true}
				continue
			}else if(types[i]=='integer'){
				if(this.isInteger(thing)){return true}
				continue
			}else if(types[i]=='array'){
				if(this.isArray(thing)){return true}
				continue
			}else if(types[i]=='object'){
				if(this.isObject(thing)){return true}
				continue
			}else if(types[i]=='null'){
				if(this.isNullType(thing)){return true}
				continue
			}else if(types[i]=='strata'){
				if(this.isStrata(thing)){return true}
				continue
			}else if(types[i]=='pure-strata'){
				if(this.isPureStrata(thing)){return true}
				continue
			}else if(types[i]=='stratum'){
				if(this.isStratum(thing)){return true}
				continue
			}else if(types[i]=='pure-stratum'){
				if(this.isPureStratum(thing)){return true}
			}
		}
		return false
	}

	//============================================================================================
	//ASSERTIONS (cant import these without circular dependencies), MUST STAY HERE

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

	assertStringLength(str, str_min, str_max){
		if(!this._isString(str)){return false}

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

	assertIntRange(int, int_min, int_max){
		if(!this._isInteger(int)){return false}
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

    assertTreeDepth(obj, d_min, d_max){
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

    assertObjectWidth(atDepth){
        
    }

    assertObjectTypePattern(){

    }

	assertArrayTypePattern(){

    }

    assertArrayLength(){

    }


    //general assertions
    apply(func, on, assertion){
        //apply a function on a list, object, integer, function should return assertion value
    }
	

	//============================================================================================
	//GETTERS (cant import these without circular dependencies), MUST STAY HERE

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

    getTreeWidth(obj, w=[0]){
        //gets an array of
        if(this.validation._isObject(obj)){
            for(var i = 0; i<Object.keys(obj).length; i++){
                var key = Object.keys(obj)[i]
                var val = obj[key]
                if(i>=w[0]){w[0]=i}
                this.treeWidth(val, w)
            } 
        }
        return w[0]
    }

    getTreeDepth(obj, n=0, d=[0]){
        if(this.validation._isObject(obj)){
            for(var i = 0; i<Object.keys(obj).length; i++){
                var key = Object.keys(obj)[i]
                var val = obj[key]
                this.treeDepth(val, n+1, d)
            } 
        }
        if(n>=d[0]){d[0]=n}
        return d[0]
    }

    getTreeSectionAtWidth(w, section=[]){
        //gets a cross section object at depth n
        if(this.validation._isObject(obj)){
            for(var i = 0; i<Object.keys(obj).length; i++){
                var key = Object.keys(obj)[i]
                var val = obj[key]
                if(i==w){
                    section.push(val)
                }
                this.treeSectionAtWidth(w, section)
            } 
        }
        return section
    }

    getTreeSectionAtDepth(d, n=0, section=[]){
        //gets a cross section object at depth n
        if(this.validation._isObject(obj)){
            for(var i = 0; i<Object.keys(obj).length; i++){
                var key = Object.keys(obj)[i]
                var val = obj[key]
                if(d==n){
                    section.push(val)
                }
                this.treeDepth(d, n+1)
            } 
            
        }
        return section
    }

    getMatrixDepth(mtx, n=0, d=[0]){
        if(this.validation._isArray(mtx)){
            for(var i = 0; i<mtx.length; i++){
                if(n>=d[0]){d[0]=n}
                this.matrixDepth(mtx[i], n+1, d)
            }
        }
        return d[0]
    }

    getMatrixWidth(mtx, w=[0]){
        //a matrix does not have to be a square
        if(this.validation._isArray(mtx)){
            for(var i = 0; i<mtx.length; i++){
                if(i>=w[0]){w[0]=i}
                this.treeWidth(mtx[i], w)
            } 
        }
        return w[0]
    }

    getMatrixSectionAtDepth(mtx, d, section=[]){
        if(d==0){
            section.push(mtx)
        }else if(this.validation._isArray(mtx)){
            for(var i = 0; i<mtx.length; i++){
                this.matrixSectionAtDepth(mtx[i], d-1, section)
            }
        }else{
            return section
        }
        return section
    }
    getMatrixSectionAtWidth(mtx, w, section){
        
    }

    getLnklstLength(lnklst, l=[0]){
        if(!this.validation._isObject(lnklst)){return false}
        if(lnklst['next']){
            l[0]+=1
            this.lnklstLength(lnklst['next'], l)
        }
        return l
    }
    getLnklstAt(lnklst, n, payload=[]){
        if(!this.validation._isObject(lnklst)){return false}
        if(n==0){
            payload.push(lnklst['payload'])
            return payload
        }else{
            if(lnklst['next']){
                this.lnklstLength(lnklst['next'], n-1)
            }else{
                return payload
            }
        }
        
        return payload
    }
}

