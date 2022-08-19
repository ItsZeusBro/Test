import * as assert  from "node:assert";
export class Validation{
	//VALIDATION-----------------------------------------------------
	//ng means assert that n is greater than ng
	//nl means assert that n is less than nl
	//they mean different things in different contexts
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


	//w_min = assert that width is greater than w_min
	//w_max = assert that width is less than w_max
	//d_min = assert that depth is greater than d_min
	//d_max = assert that depth is less than d_max
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
	

		//[
		//	{}, {'somekey':'someValue', 'somekey2':'someValue'}, {'somekey':[]}, {'somekey':123}, {'somekey':{}}etc..
		//]
		//
	
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
	isStructuredStrata(strata, aw_min, aw_max, ow_min, ow_max, pk=['payload']){
		//structured strata is based on payload distinctions for arrays and objects
	}
	isUnstructuredStrata(strata, aw_min, aw_max, ow_min, ow_max){
		//width is evaluated only on objects if strata layer is an array
		//or it is evaluated only on arrays if strata is an object
	}
	isMixedStrata(strata, aw_min, aw_max, ow_min, ow_max){
		//mixed is checked against both structured and unstructured strata types for each layer
		//so it is more computationally expensive (but doesnt have to be[its just easier for now])
	}
	//everything else is considered base strata so long as strata exists at the first layer (n=0)
	//strata starts as nonexistent where n=-1, if depth checking is used, 0 would represent a top level array or object
	//if strata is undefined, it still returns true, so long as depth checking is not involved at something greater than
	//or equal to 0
	//strata evaluation
	isStrata(strata, aw_min, aw_max, ow_min, ow_max, d_min, d_max, n=-1, maxdepth=[0], truth=[true], pk=['payload'], pure=true){
		//at each level it must be an array of objects or object of arrays
	}

}