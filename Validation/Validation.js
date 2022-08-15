import { assert } from "node:console";
export class Validation{
	//VALIDATION-----------------------------------------------------
	//gt is greater than n nested levels, lt is less than n nested levels, eq is equal to n nested levels
	//gn is greater than n objects per strata, ln is less than n objects per strata, en is equal to n objects per strata
	isStrata(){
		
	}

	isInt(n, ng, nl){
		if(n && ng && nl){
			try{
				assert.equal(typeof n ==='number', true)
				assert.equal(n>ng, true)
				assert.equal(n<nl, true)
			}catch(err){
				return false
			}
		}else if(n && ng){
			try{
				assert.equal(typeof n ==='number', true)
				assert.equal(n>ng, true)
			}catch(err){
				return false
			}
		}else if(n && nl){
			try{
				assert.equal(typeof n ==='number', true)
				assert.equal(n<nl, true)
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
	
	isArray(arr, ng, nl, nng, nnl){
		if(arr && ng && nl){
			try{
				assert.equal(Array.isArray(arr), true)
				assert.equal(arr.length>ng, true)
				assert.equal(arr.length<nl, true)
			}catch(err){
				return false
			}
		}else if(arr && ng){
			try{
				assert.equal(Array.isArray(arr), true)
				assert.equal(arr.length>ng, true)
			}catch(err){
				return false
			}
		}else if(arr && nl){
			try{
				assert.equal(Array.isArray(arr), true)
				assert.equal(arr.length<nl, true)
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
		if(nng && Array.isArray(arr)){
			for(var i=0; i<arr.length; i++){
				try{
					assert.equal(arr[i]>nng, true)
				}catch(err){
					return false
				}
			}
		}
		if(nnl && Array.isArray(arr)){
			for(var i=0; i<arr.length; i++){
				try{
					assert.equal(arr[i]<nnl, true)
				}catch(err){
					return false
				}
			}
		}
		return true
	}

	isObj(){

	}

	isStr(){

	}

}