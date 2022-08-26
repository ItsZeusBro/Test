import * as assert from "node:assert";
import { Randoms } from "../Randoms/Randoms.js";
import { Types } from "../Types/Types.js";
import { Comparators } from "../Comparators/Comparators.js";
export class RandomsTest{
	constructor(n, i){
		this.types = new Types()
		this.randoms= new Randoms()
		this.comparators = new Comparators()
		this.randomPrimitive(n, i)
		this.randomNull(n, i)
		this.randomSample(n, i)
		this._genString(n, i)
		this.randomString(n, i)
		this.randomStringArray(n, i)
		this.randomInteger(n, i)
		this.randomIntegerArray(n, i)
		this.randomArray(n, i)
		this.randomMatrix(n, i)
		this.randomArrayObject(n, i)
		this.randomObject(n, i)
		this.randomTree(n, i)
		this.randomArrayOfObjects(n, i)
		this.randomObjectOfArrays(n, i)
	}

	randomPrimitive(n, _i){
		//expects a primitive in the form of string, integer, array, object, or null type
		var prim = this.randoms.randomPrimitive(n)
		var prev;
		for(var i = 0; i<_i; i++){
			prev=prim
			prim = this.randoms.randomPrimitive(n, prim)
			assert.equal(this.comparators.isEqual(prev, prim), false)
			assert.equal(this.types.isOfTypes(['string', 'integer', 'array', 'object', 'null']))
		}
	}

	randomNull(n){

	}

	randomSample(n){

	}
	_genString(n){

	}

	randomString(n){
		
	}

	randomStringArray(n){

	}
	
	randomInteger(n){
		
	}
	randomIntegerArray(n){

	}

	

	randomArray(n){
		
	}

	randomMatrix(n){

	}
	
	randomArrayObject(n){

	}

	randomTree(n){

	}



	randomObject(n){

		
	}


	randomArrayOfObjects(n){

	}

	randomObjectOfArrays(n){

	}

	
}