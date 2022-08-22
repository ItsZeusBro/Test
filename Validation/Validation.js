import * as assert  from "node:assert";
export class Validation{
	//valid strata examples:
	//Strata can be explained as stratified schema, where layers are formed as either an object containing an array or an array
	//containing an object

	isStratum(stratum, aw_min, aw_max, ow_min, ow_max){
		//just checks if there exists a single and minimal stratum case in the layer of schema
		var count = 0;
		if(Array.isArray(stratum)){
			if((aw_min||aw_max)&&!this.assertArrayWidth(stratum, aw_min, aw_max)){return false}
			for(var i = 0; i<stratum.length; i++){
				var val =stratum[i]
				if(typeof val === 'object'){
					count+=1
				}
			}
		}else if(typeof stratum === 'object'){
			if((ow_min||ow_max)&&!this.assertObjectWidth(stratum, ow_min, ow_max)){return false}
			for(var i = 0; i<Object.keys(stratum).length; i++){
				var key = Object.keys(stratum)[i]
				var val = stratum[key]
				if(Array.isArray(val)){
					count+=1
				}
			}
		}else{
			return false
		}

		if(count){
			return true
		}
	}
	//layer evaluation
	isPureStratum(stratum, aw_min, aw_max, ow_min, ow_max, payload={'keys':['payload'], 'patterns':[/[0-9]*/g]}){
		//this means that the stratum base cases are totally based on payload keys and patterns, other than
		//the stratum connections to the next layer of stratum.
		//if base cases are not pure payload, return false
		if(Array.isArray(stratum)){
			if((aw_min||aw_max)&&!this.assertArrayWidth(stratum, aw_min, aw_max)){return false}
			for(var i = 0; i<stratum.length; i++){
				if((typeof stratum[i] !== 'object')){
					if(!(this.inPatterns(payload['patterns'], stratum[i]))){
						return false
					}
				}
			}
			return true
		}else if(typeof stratum === 'object'){
			if((ow_min||ow_max)&&!this.assertObjectWidth(stratum, ow_min, ow_max)){return false}
			for(var i = 0; i<Object.keys(stratum).length; i++){
				var key = Object.keys(stratum)[i];
				var val = stratum[key];
				if((!Array.isArray(val))){
					if(!(payload['keys'].includes(key))){
						return false
					}
				}
			}
			return true
		}else if (this.inPatterns(payload['patterns'], stratum)){
			return true
		}else{
			return false
		}
	}

	inPatterns(patterns, value){
		for(var i = 0; i<patterns.length; i++){
			if(typeof value === 'string' && value.match(patterns[i])[0]){
				return true
			}
		}
		return false
	}

	isPureStrata(strata, stratumPattern, basePattern, regular=true){
		//this means that the stratum at each layer should be purely based on the payload keys and patterns provided
		//if regular is true, then each layer's top level payload image must be identical to the rest
	}

	isStrata(strata, stratumPattern, basePattern, regular=true){
		//this means that the stratum at each layer does not need to be purely based on the payload keys and patterns provided
		//if regular is true, then each layer's top level payload image must be identical to the rest
	}

	isInteger(n, n_min, n_max){
		//ng means assert that integer n is greater than ng
		//nl means assert that integer n is less than nl

		if(n && n_min && n_max){
			try{
				assert.equal(typeof n ==='number', true)
				assert.equal(n>=n_min, true)
				assert.equal(n<=n_max, true)
			}catch(err){
				return false
			}
		}else if(n && n_min){
			try{
				assert.equal(typeof n ==='number', true)
				assert.equal(n>=n_min, true)
			}catch(err){
				return false
			}
		}else if(n && n_max){
			try{
				assert.equal(typeof n ==='number', true)
				assert.equal(n<=n_max, true)
			}catch(err){
				return false
			}
		}else if(n){
			try{
				assert.equal(typeof n ==='number', true)
			}catch(err){
				return false
			}
		}else{
			return false
		}
		return true
	}

	isArray(arr, n_min, n_max){
		//n_min means assert that array arr.length is greater than n_min
		//n_max means assert that array arr.length is less than n_max
		if(arr && n_min && n_max){
			try{
				assert.equal(Array.isArray(arr), true)
				assert.equal(arr.length>=n_min, true)
				assert.equal(arr.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(arr && n_min){
			try{
				assert.equal(Array.isArray(arr), true)
				assert.equal(arr.length>=n_min, true)
			}catch(err){
				return false
			}
		}else if(arr && n_max){
			try{
				assert.equal(Array.isArray(arr), true)
				assert.equal(arr.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(arr){
			try{
				assert.equal(Array.isArray(arr), true)
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
		if((typeof obj === 'object') &&(d_max||d_min)&&(n>=maxdepth[0])){maxdepth[0]=n}

		if((typeof obj === 'object') && Object.keys(obj).length){
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
				assert.equal(typeof str === 'string', true)
				assert.equal(str.length>=n_min, true)
				assert.equal(str.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(str && n_min){
			try{
				assert.equal(typeof str === 'string', true)
				assert.equal(str.length>=n_min, true)
			}catch(err){
				return false
			}
		}else if(str && n_max){
			try{
				assert.equal(typeof str === 'string', true)
				assert.equal(str.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(str){
			try{
				assert.equal(typeof str === 'string', true)
			}catch(err){
				return false
			}
		}else{
			return false
		}
		return true
	}
	
	assertArrayWidth(array, aw_min, aw_max){
		if(aw_min&& aw_max){
			try{
				assert.equal(array.length>=aw_min, true)
				assert.equal(array.length<=aw_max, true)
			}catch{
				return false
			}
		}else if(aw_min){
			try{
				assert.equal(array.length>=aw_min, true)
			}catch{
				return false
			}
		}else if(aw_max){
			try{
				assert.equal(array.length<=aw_max, true)
			}catch{
				return false
			}
		}else{
			return false
		}
		return true
	}

	assertObjectWidth(obj, ow_min, ow_max){
		if(ow_min&&ow_max){
			try{
				assert.equal(Object.keys(obj).length>=ow_min, true)
				assert.equal(Object.keys(obj).length<=ow_max, true)
			}catch{
				return false
			}
		}else if(ow_min){
			try{
				assert.equal(Object.keys(obj).length>=ow_min, true)
			}catch{
				return false
			}
		}else if(ow_max){
			try{
				assert.equal(Object.keys(obj).length<=ow_max, true)
			}catch{
				return false
			}
		}else{
			return false
		}
	}

	assertStringLength(str, str_min, str_max){
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
}

var validation = new Validation()
assert.equal(validation.isPureStratum({'1':[], '2':[], 'payload':{}}), true)
assert.equal(validation.isPureStratum([{}, {}, {}, {}]), true)
assert.equal(validation.isPureStratum([{}, {}, '1234']), true)


assert.equal(validation.isStratum({'1':[], '2':[], 'payload':{}}), true)
assert.equal(validation.isStratum([{}, {}, {}, {}]), true)
assert.equal(validation.isStratum([{}, {}, '1234']), true)