import * as assert  from "node:assert";

class Array{
    constructor(descriptor){
        // 	'maxArrLength': 10,
        //  'minArrLength: 1, 
        //  'arrTypes':['string', 'integer', 'array', 'object', 'null-type']
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
    _isArray(arr){
		return Array.isArray(arr)
	}

	isIntegerArray(){

	}
	isObjectArray(){

	}

    

    randomArray(except, n=this.arrWidth){
		var arr=[]; 
		for(var i=0; i<n; i++){
			arr.push(this.random(except, n-1))
		}; 
		if(this.comparators.isEqual(arr, except)){
			return this.randomArray(except)
		}else{
			return arr;
		}
	}

    randomArrayOfStrings(except, n=this.arrWidth){
		var arr=[]; 
		for(var i=0; i<n; i++){
			arr.push(this._genString())
		}; 
		if(this.comparators.isEqual(arr, except)){
			return this.randomArrayOfStrings(except, n)
		}else{
			return arr
		}
	}

    randomArrayOfObjects(n, except){
		var objArr=[]
		for(var i=0; i<n; i++){
			objArr.push(this._randomObject(n))
		}

		if(this.comparators.isEqual(objArr, except)){
			return this.randomObject(n, except)
		}else{
			return objArr
		}
	}

    randomArrayOfIntegers(except, n=this.arrWidth){
		var arr=[]; 

		for(var i=0; i<n; i++){arr.push(this.randomRange(this.minInt, this.maxInt))};

		if(this.comparators.isEqual(arr, except)){
			return this.randomArrayOfIntegers(except)
		}else{
			return arr
		}
	}

    isEqual(arr1, arr2, equal=[true]){
		if(this.types.isArray(arr1) && this.types.isArray(arr2)&& (arr1.length == arr2.length)){
			for(var i=0; i<arr1.length; i++){
				if(!this.isEqual(arr1[i], arr2[i])){
					equal[0]
					return false
				}
			}
		}else{
			equal[0]=false
			return false
		}
		return equal[0]
	}
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}
// var descriptor={
// 	'maxArrLength': 10,
//  'minArrLength: 1, 
//  'arrTypes':['string', 'integer', 'array', 'object', 'null-type']
// 	'objWidth':5,
// 	'mtxDepth':5,
// 	'treeDepth':5,
// 	'payload':{'keys':['payload'], 'patterns':[]},
// 	'minInt':0, 
// 	'maxInt':10000,
// 	'minStr':1,
// 	'maxStr':20,
// 	'randomTypes':['string', 'integer', 'array', 'object', 'null-type'],//, 'strata', 'pure-strata', 'stratum', 'pure-stratum'],
// 	'charSet':'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// }
