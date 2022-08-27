import * as assert from "node:assert";
import { Randoms } from "../Randoms/Randoms.js";
import { Types } from "../Types/Types.js";
import { Comparators } from "../Comparators/Comparators.js";
export class RandomsTest{

	constructor(descriptor, iterations){
		this.types = new Types()
		this.randoms= new Randoms(descriptor)
		this.comparators = new Comparators()
		this.randomNull(iterations)
		this.randomSample(iterations)
		this.randomString(iterations)
		this.randomStringArray(iterations)
		this.randomInteger(iterations)
		this.randomIntegerArray(iterations)
		//this.randomPrimitive(n, i)
		// this.randomArray(min, max, i)
		// this.randomMatrix(min, max, i)
		// this.randomArrayObject(min, max, i)
		// this.randomObject(min, max, i)
		// this.randomTree(min, max, i)
		// this.randomArrayOfObjects(min, max, i)
		// this.randomObjectOfArrays(min, max, i)
	}


	randomPrimitive(iterations, except){
		//expects a primitive in the form of string, integer, array, object, or null type
		var prim = this.randoms.randomPrimitive(except)

	}


	randomNull(iterations, except){
		for(var i=0; i<iterations; i++){
			var _null = this.randoms.randomNull(except)
			console.log('asserting randomNull', _null, "returns true on isNullType", this.types.isNullType(_null))
			assert.equal(this.types.isNullType(_null), true)
		}
	}


	randomSample(iterations, except){
		for(var j = 0; j<iterations; j++){
			var arr = []
			for(var i =0; i<10; i++){
				arr.push(this.randoms.randomString(except))
			}
			var sample = this.randoms.randomSample(arr)
			console.log('asserting randomSample returns sample', sample, 'from', arr)
			assert.equal(arr.includes(sample), true)
		}
	}


	randomString(iterations, except){
		var strings = []
		for(var i =0; i<iterations; i++){
			var string = this.randoms.randomString(except)
			strings.push(string)
			console.log('asserting randomString returns valid string', string)
			assert.equal(this.types.isString(string), true)
		}
		console.log(this.types.assertRandomness(strings, 0.05))
		assert.equal(this.types.assertRandomness(strings, 0.05), true)
	}


	randomStringArray(iterations, except){
		var stringsArray = []
		for(var i=0; i<iterations; i++){

			var stringArray = this.randoms.randomStringArray(except)

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
	

	randomInteger(iterations, except){
		var integers = []
		for(var i =0; i<iterations; i++){

			var integer = this.randoms.randomInteger(except)
			integers.push(integer)
			console.log('asserting randomInteger returns valid integer', integer)
			assert.equal(this.types.isInteger(integer), true)

		}

		console.log(this.types.assertRandomness(integers, 0.15))
		assert.equal(this.types.assertRandomness(integers, 0.15), true)
	}

	randomIntegerArray(iterations, except){

		var integersArray = []

		for(var i =0; i<iterations; i++){

			var integerArray = this.randoms.randomIntegerArray(except)
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

	

	randomArray(iterations, except){
		this.randoms.randomArray(except)
	}

	randomObject(iterations, except){
		this.randoms.randomObject(except)

		
	}

	randomMatrix(iterations, except){
		this.randoms.randomMatrix(except)

	}
	
	randomTree(iterations, except){
		this.randoms.randomTree(except)

	}

	randomArrayOfObjects(iterations, except){
		this.randoms.randomArrayOfObjects(except)
	}

	randomObjectOfArrays(iterations, except){
		this.randoms.randomObjectOfArrays(except)

	}
}



var iterations = 1000;

var descriptor={
	'arrWidth': 10,
	'objWidth':10,
	'mtxDepth':5,
	'treeDepth':5,
	'payload':{'keys':['payload'], 'patterns':[]},
	'minInt':0, 
	'maxInt':10000,
	'minStr':1,
	'maxStr':20,
	'charSet':'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
}

var randoms = new RandomsTest(descriptor, iterations)
