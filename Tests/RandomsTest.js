import * as assert from "node:assert";
import { Randoms } from "../Randoms/Randoms.js";
import { Types } from "../Types/Types.js";
import { Comparators } from "../Comparators/Comparators.js";
export class RandomsTest{
	constructor(arrObjSize, minIntVal, maxIntVal, minStrSize, maxStrSize, minDepth, maxDepth, iterations){
		this.types = new Types()
		this.randoms= new Randoms()
		this.comparators = new Comparators()
		//this.randomPrimitive(n, i)
		this.randomNull(iterations)
		this.randomSample(iterations)
		this.randomString(minVal, maxVal, iterations)
		this.randomStringArray(size, minVal, maxVal, iterations)
		this.randomInteger(minVal, maxVal, iterations)
		this.randomIntegerArray(n, min, max, i)
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

	randomNull(iterations){
		for(var i=0; i<iterations; i++){
			var _null = this.randoms.randomNull()
			console.log('asserting randomNull', _null, "returns true on isNullType", this.types.isNullType(_null))
			assert.equal(this.types.isNullType(_null), true)
		}

	}

	randomSample(iterations){
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

	randomString(minSize, maxSize, iterations){
		var strings = []
		for(var i =0; i<iterations; i++){
			var string = this.randoms.randomString(minSize, maxSize)
			strings.push(string)
			console.log('asserting randomString returns valid string', string)
			assert.equal(this.types.isString(string), true)
		}
		console.log(this.types.assertRandomness(strings, 0.05))
		assert.equal(this.types.assertRandomness(strings, 0.05), true)
	}

	randomStringArray(size, minSize, maxSize, iterations){
		var stringsArray = []
		for(var i=0; i<iterations; i++){
			var stringArray = this.randoms.randomStringArray(size, minSize, maxSize)
			console.log('asserting randomStringArray returns valid stringArray', stringArray)
			assert.equal(this.types.isArray(stringArray), true)
			console.log('randomStringArray returned', stringArray, "and its valid")
			for(var j = 0; j<stringArray.length; j++){
				console.log('asserting each string in stringArray is a valid string', stringArray[j])
				assert.equal(this.types.isString(stringArray[j]), true)
				console.log('isString() on', stringArray[j], "is valid")
			}
			stringsArray.push(stringArray)
		}
		console.log(this.types.assertRandomness(stringsArray, 0.05))
		assert.equal(this.types.assertRandomness(stringsArray, 0.05), true)
	}
	
	randomInteger(min, max, iterations){
		var integers = []
		for(var i =0; i<iterations; i++){
			var integer = this.randoms.randomInteger(min, max)
			integers.push(integer)
			console.log('asserting randomInteger returns valid integer', integer)
			assert.equal(this.types.isInteger(integer), true)
		}
		console.log(this.types.assertRandomness(integers, 0.15))
		assert.equal(this.types.assertRandomness(integers, 0.15), true)
	}
	randomIntegerArray(n, min, max, iterations){
		var integersArray = []
		for(var i =0; i<iterations; i++){
			var integerArray = this.randoms.randomIntegerArray(n, min, max)
			console.log('asserting randomIntegerArray returns valid integerArray', integerArray)
			assert.equal(this.types.isArray(integerArray), true)
			console.log('randomIntegerArray returned', integerArray, "and its valid")
			for(var j = 0; j<integerArray.length; j++){
				console.log('asserting each integer in integerArray is a valid integer', integerArray[j])
				assert.equal(this.types.isInteger(integerArray[j]), true)
				console.log('isInteger() on', integerArray[j], "is valid")
			}
			integersArray.push(integerArray)
		}
		console.log(this.types.assertRandomness(integersArray, 0.05))
		assert.equal(this.types.assertRandomness(integersArray, 0.05), true)
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


var arrObjSize=10
var minIntVal=0
var maxIntVal=10000
var minStrSize=1 
var maxStrSize=20
var minDepth=1 
var maxDepth=5
var iterations = 1000;
var randoms = new RandomsTest(size, minVal, maxVal, iterations)
