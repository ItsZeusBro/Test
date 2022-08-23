import * as assert  from "node:assert";
import { Assertions } from "./Assertions.js";
export class Validation{
	constructor(){
		this.assert = new Assertions()
	}
	//valid strata examples:
	//Strata can be explained as stratified schema, where layers are formed as either an object containing an array or an array
	//containing an object

	isStratum(stratum, aw_min, aw_max, ow_min, ow_max, payload={'keys':['payload'], 'patterns':[]}){
		//Stratum is an array with an object or an object with an array 
		//(with or without other data types which are called 'payload').
		var count = 0;
		if(Array.isArray(stratum)){
			if((aw_min||aw_max)&&(!this.assert.stratumArrayWidth(stratum, aw_min, aw_max, payload))){return false}
			for(var i = 0; i<stratum.length; i++){
				var val =stratum[i]
				if(typeof val === 'object'){
					count+=1
				}
			}
		}else if(typeof stratum === 'object'){
			if((ow_min||ow_max)&&(!this.assert.stratumObjectWidth(stratum, ow_min, ow_max, payload))){return false}
			for(var i = 0; i<Object.keys(stratum).length; i++){
				var key = Object.keys(stratum)[i]
				var val = stratum[key]
				if( Array.isArray(val) && !(payload['keys'].includes(key))){
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
			if((aw_min||aw_max)&&(!this.assert.stratumArrayWidth(stratum, aw_min, aw_max, payload))){return false}
			for(var i = 0; i<stratum.length; i++){
				var val = stratum[i];
				if(typeof val === 'object'){
					count+=1
				}
			}
			return true
		}else if(typeof stratum === 'object'){
			if((ow_min||ow_max)&&(!this.assert.stratumObjectWidth(stratum, ow_min, ow_max, payload))){return false}
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
			if(typeof value === 'string' && value.match(patterns[i])[0]){
				return true
			}
		}
		return false
	}

	isPureStrata(strata, aw_min, aw_max, ow_min, ow_max, d_min, d_max, payload={'keys':['payload'], 'patterns':[]}){

	}

	isStrata(strata, aw_min, aw_max, ow_min, ow_max, d_min, d_max, payload={'keys':['payload'], 'patterns':[]}){

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
	
	
}

