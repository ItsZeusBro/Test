import * as assert from "node:assert";
import { Randoms } from "../Randoms/Randoms.js";
import { Types } from "../Types/Types.js";
import { Comparators } from "../Comparators/Comparators.js";
export class RandomsTest{
	constructor(min, max, i){
		this.types = new Types()
		this.randoms= new Randoms()
		this.comparators = new Comparators()
		//this.randomPrimitive(n, i)
		this.randomNull(max, i)
		this.randomSample(max, i)
		this.randomString(min, max, i)
		this.randomStringArray(min, max, i)
		this.randomInteger(min, max, i)
		this.randomIntegerArray(min, max, i)
		this.randomArray(min, max, i)
		this.randomMatrix(min, max, i)
		this.randomArrayObject(min, max, i)
		this.randomObject(min, max, i)
		this.randomTree(min, max, i)
		this.randomArrayOfObjects(min, max, i)
		this.randomObjectOfArrays(min, max, i)
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

	randomSample(n, iterations){
		for(var j = 0; j<iterations; j++){
			var arr = []
			for(var i =0; i<10; i++){
				arr.push(this.randoms._genString(10))
			}
			var sample = this.randoms.randomSample(arr)
			console.log('asserting randomSample returns sample', sample, 'from', arr)
			assert.equal(arr.includes(sample), true)
		}
	}

	randomString(min, max, iterations){
		var strings = []
		for(var i =0; i<iterations; i++){
			var string = this.randoms.randomString(min, max)
			strings.push(string)
			console.log('asserting randomString returns valid string', string)
			assert.equal(this.types.isString(string), true)
		}
		console.log(this.types.assertRandomness(strings, 0.05))
		assert.equal(this.types.assertRandomness(strings, 0.05), true)
	}

	randomStringArray(min, max, iterations){
		var stringsArray = []
		for(var i =0; i<iterations; i++){
			var stringArray = this.randoms.randomStringArray(min, max)
			console.log('asserting randomStringArray returns valid stringArray', stringArray)
			assert.equal(this.types.isArray(stringArray), true)
			console.log('randomStringArray returned', stringArray, "and its valid")
			for(var j = 0; j<stringArray.length; j++){
				console.log('asserting each string in stringArray is a valid string', stringArray[i])
				assert.equal(this.types.isString(stringArray[j]), true)
				console.log('isString() on', stringArray[j], "is valid")
			}
			stringsArray.push(stringArray)
		}
		console.log(this.types.assertRandomness(stringsArray, 0.05))
		assert.equal(this.types.assertRandomness(stringsArray, 0.05), true)
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

var randoms = new RandomsTest(2, 5, 1000)
