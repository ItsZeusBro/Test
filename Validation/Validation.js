import * as assert  from "node:assert";
export class Validation{
	//valid strata examples:
	//Strata can be explained as stratified schema, where layers are formed as either an object containing an array or an array
	//containing an object

	isStratum(stratum, payload){
		//just checks if there exists a single and minimal stratum case in the layer of schema
		var count = 0;
		if(Array.isArray(stratum)){
			for(var i = 0; i<stratum.length; i++){
				var val =stratum[i]
				if(typeof val === 'object'&&!this.isPattern(val, payload)){
					count+=1
				}
			}
		}else if(typeof stratum === 'object'){
			for(var i = 0; i<Object.keys(stratum).length; i++){
				var key = Object.keys(stratum)[i]
				var val = stratum[key]
				if(Array.isArray(val)&&!this.isPattern(val, payload)){
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
			for(var i = 0; i<stratum.length; i++){
				if((typeof stratum[i] !== 'object')){
					if(!(this.inPatterns(payload['patterns'], stratum[i]))){
						return false
					}
				}
			}
			return true
		}else if(typeof stratum === 'object'){
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
}

var validation = new Validation()
assert.equal(validation.isPureStratum({'1':[], '2':[], 'payload':{}}), true)
assert.equal(validation.isPureStratum([{}, {}, {}, {}]), true)
assert.equal(validation.isPureStratum([{}, {}, '1234']), true)


assert.equal(validation.isImpureStratum({'1':[], '2':[], 'payload':{}}), true)
assert.equal(validation.isImpureStratum([{}, {}, {}, {}]), true)
assert.equal(validation.isImpureStratum([{}, {}, '1234']), true)