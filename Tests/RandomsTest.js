import * as assert from "node:assert";
import { Randoms } from "../Randoms/Randoms.js";
import { Types } from "../Types/Types.js";
import { Comparators } from "../Comparators/Comparators.js";
export class RandomsTest{
	constructor(n, i){
		this.types = new Types()
		this.randoms= new Randoms()
		this.comparators = new Comparators()
		//this.randomPrimitive(n, i)
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

	randomPrimitive(n, iterations){
		//expects a primitive in the form of string, integer, array, object, or null type
		var prim = this.randoms.randomPrimitive(n)
		// var prev;
		for(var i = 0; i<iterations; i++){
			// prev=prim
			prim = this.randoms.randomPrimitive(n)
			console.log(prim)
			// console.log('asserting exception condition (prev not equal to prim)', prev, prim)
			// assert.equal(this.comparators.isEqual(prev, prim), false)
			//console.log('asserting', prim, 'of type string, integer, array, object, or null')
			//assert.equal(this.types.isOfTypes(prim, ['string', 'integer', 'array', 'object', 'null']), true)
		}
	}

	randomNull(n, iterations){
		for(var i=0; i<iterations; i++){
			var _null = this.randoms.randomNull(n)
			console.log('asserting randomNull', _null, "returns true on isNullType", this.types.isNullType(_null))
			assert.equal(this.types.isNullType(_null), true)
		}

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

var randoms = new RandomsTest(5, 100)
