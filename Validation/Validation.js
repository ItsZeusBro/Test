import * as assert  from "node:assert";
export class Validation{
	//VALIDATION-----------------------------------------------------
	//ng means assert that n is greater than ng
	//nl means assert that n is less than nl
	//they mean different things in different contexts

	//valid strata examples:
	//Strata can be explained as stratified schema, where layers are formed as either an object containing an array or an array
	//containing an object
	//{
	//	'1':[]	
	//}
	//[
	//	{}, 
	//  {
	//		'1':[]
	//	}, 
	//	{
	//		'1':[
	//				{
	//				
	//				}, 
	//				{
	//					'2':[]
	//				}
	//			]
	//	}
	//]

	
	//layer evaluation
	isPureStratum(strata, aw_min, aw_max, ow_min, ow_max, payload={'keys':['payload'], 'patterns':[]}){
		//this means that the stratum base cases are totally based on payload keys and patterns, other than
		//the stratum connections to the next layer of stratum.
		//if base cases are not pure payload, return false
	}
	isImpureStratum(strata, aw_min, aw_max, ow_min, ow_max, payload={'keys':['payload'], 'patterns':[]}){
		//returns false if its pure, true otherwise
		if(this.isPureStrata(strata, aw_min, aw_max, ow_min, ow_max, payload)){
			return false
		}
		if(this.isStratum(strata, payload)){
			return true
		}
	}
	isPattern(val, pattern){
		//use PatternTypes library for this
		return false
	}
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
	isPureStrata(strata, stratumPattern, basePattern, regular=true){
		//this means that the stratum at each layer should be purely based on the payload keys and patterns provided
		//if regular is true, then each layer's top level payload image must be identical to the rest
	}
	isImpureStrata(strata, stratumPattern, basePattern, regular=true){
		//this means that the stratum at each layer does not need to be purely based on the payload keys and patterns provided
		//if regular is true, then each layer's top level payload image must be identical to the rest
	}
}