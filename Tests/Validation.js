import * as assert  from "node:assert";
import { Test } from "../Test.js";

export class Validation{
	constructor(){

		this.testIsInteger()
		this.testIsArray()
		this.testIsString()
		this.testIsObject()
		this.testIsStratum()
		this.testIsStrata()
	}

	testIsInteger(){
		var n = 10;
		console.log("Tests.Validation.testIsInteger() on", n)
		var n_min=10;
		var n_max=10;
		assert.equal(new Test().Validation.isInteger(n, n_min, n_max), true)

		n_min=11;
		assert.equal(new Test().Validation.isInteger(n, n_min, n_max), false)

		n_min=10;
		n_max=9;
		assert.equal(new Test().Validation.isInteger(n, n_min, n_max), false)
		console.log("Tests.Validation.testIsInteger() PASSES")
	}

	testIsArray(){
		var arr = new Test().Random.randArray(5)
		console.log("Tests.Validation.testIsArray() on", arr)
		var n_min = 5
		var n_max = 5
		assert.equal(new Test().Validation.isArray(arr, n_min, n_max), true)

		n_min = 6
		assert.equal(new Test().Validation.isArray(arr, n_min, n_max), false)

		n_min = 5
		n_max = 4
		assert.equal(new Test().Validation.isArray(arr, n_min, n_max), false)
		console.log("Tests.Validation.testIsArray() PASSES")

	}

	testIsString(){
		var str = new Test().Random.randString(5)

		console.log("Tests.Validation.testIsString() on", str)
		var n_min = 5
		var n_max = 5
		assert.equal(new Test().Validation.isString(str, n_min, n_max), true)

		n_min = 6
		assert.equal(new Test().Validation.isString(str, n_min, n_max), false)

		n_min = 5
		n_max = 4
		assert.equal(new Test().Validation.isString(str, n_min, n_max), false)
		console.log("Tests.Validation.testIsString() PASSES")
	}

	testIsStratum(){
		//----------------definition-------------------
		//Valid Stratum:
		//1. arrays must contain at least one object, and that object should not be a payload pattern
		//2. objects must contain at least one array, and that array should not be associated with a payload key
		
		//Options:
		//aw_min: array width min (the minimum allowable number of items in the array if it is an array stratum)
		//aw_max: array width max (the maximum allowable number of items in the array if it is an array stratum)
		//ow_min: object width min (the minimum allowable number of items in the object if it is an object stratum)
		//ow_max: object width max (the maxumum allowable number of items in the object if it is an object stratum)
		//----------------Basic isStratum() expected true----------------
		//Testing Strategy:
		//test objects containing arrays at various widths
		//test arrays containing objects at various widths
		//because payload keys can refer to anything make sure width does not count towards those values if they are valid
		//payload keys
		//because javascript objects are not in payload patterns, they are always counted towards array stratum width
		var obj1 = [{'1':[]}, '1234']
		var obj2 = [{}, {'1':[]}]	
		var obj3 = {'1':[], '2':[], 'payload':{}}
		var obj4 = {'payload':{}}

		console.log("Tests.Validation.isStratum() on", obj1, "EXPECTED TRUE")
		assert.equal(new Test().Validation.isStratum(obj1), true)
		console.log("Tests.Validation.isStratum() RESULT", new Test().Validation.isStratum(obj1))

		console.log("Tests.Validation.isStratum() on", obj1, "asserting min/max width 1", "EXPECTED TRUE")
		assert.equal(new Test().Validation.isStratum(obj1, 1, 1), true)
		console.log("Tests.Validation.isStratum() RESULT", new Test().Validation.isStratum(obj1, 1, 1))

		console.log("Tests.Validation.isStratum() on", obj1, "asserting min/max width 2", "EXPECTED FALSE")
		assert.equal(new Test().Validation.isStratum(obj1, 2, 2), false)
		console.log("Tests.Validation.isStratum() RESULT", new Test().Validation.isStratum(obj1, 2, 2))

		console.log("Tests.Validation.isStratum() on", obj1, "asserting min/max width 0", "EXPECTED FALSE")
		assert.equal(new Test().Validation.isStratum(obj1, -1, -1), false)
		console.log("Tests.Validation.isStratum() RESULT", new Test().Validation.isStratum(obj1, -1, -1))

		console.log()
		console.log()
		console.log()


		console.log("Tests.Validation.isStratum() on", obj2, "EXPECTED TRUE")
		assert.equal(new Test().Validation.isStratum(obj2), true)
		console.log("Tests.Validation.isStratum() RESULT", new Test().Validation.isStratum(obj2))

		console.log("Tests.Validation.isStratum() on", obj2, "asserting min/max width 2", "EXPECTED TRUE")
		assert.equal(new Test().Validation.isStratum(obj2, 2, 2), true)
		console.log("Tests.Validation.isStratum() RESULT", new Test().Validation.isStratum(obj2, 2, 2))

		console.log()
		console.log()
		console.log()


		console.log("Tests.Validation.isStratum() on", obj3, "EXPECTED TRUE")
		assert.equal(new Test().Validation.isStratum(obj3), true)
		console.log("Tests.Validation.isStratum() RESULT", new Test().Validation.isStratum(obj3))

		console.log("Tests.Validation.isStratum() on", obj3, "asserting min/max width 2", "EXPECTED TRUE")
		assert.equal(new Test().Validation.isStratum(obj3,  undefined, undefined, 2, 2), true)
		console.log("Tests.Validation.isStratum() RESULT", new Test().Validation.isStratum(obj3, undefined, undefined, 2, 2))
		
		console.log("Tests.Validation.isStratum() on", obj3, "asserting min/max width 1", "EXPECTED FALSE")
		assert.equal(new Test().Validation.isStratum(obj3,  undefined, undefined, 1, 1), false)
		console.log("Tests.Validation.isStratum() RESULT", new Test().Validation.isStratum(obj3, undefined, undefined, 1, 1))
		
		console.log("Tests.Validation.isStratum() on", obj3, "asserting min/max width 3", "EXPECTED FALSE")
		assert.equal(new Test().Validation.isStratum(obj3,  undefined, undefined, 3, 3), false)
		console.log("Tests.Validation.isStratum() RESULT", new Test().Validation.isStratum(obj3, undefined, undefined, 3, 3))
		
		console.log()
		console.log()
		console.log()


		console.log("Tests.Validation.isStratum() on", obj4, "EXPECTED FALSE")
		assert.equal(new Test().Validation.isStratum(obj4), false)
		console.log("Tests.Validation.isStratum() RESULT", new Test().Validation.isStratum(obj4))

		console.log("Tests.Validation.isStratum() on", obj4, "EXPECTED FALSE")
		assert.equal(new Test().Validation.isStratum(obj4), false)
		console.log("Tests.Validation.isStratum() RESULT", new Test().Validation.isStratum(obj4, undefined, undefined, 0, 0))

		console.log()
		console.log()
		console.log()

	}

	//isStrata(strata, aw_min, aw_max, ow_min, ow_max, d_min, d_max, n=0, maxdepth=[0], truth=[true], pk=['payload'], pure=true){

	testIsStrata(){
		//Valid strata has valid stratum at each recursive level. If there is any valid stratum, then it is valid strata
		//of depth n, where n represents the number of valid stratum in the recursive strata
		//Furthermore, strata can be pure or impure, where pure strata represents pure stratum at every recursive level
		//up until a base case is present (which cannot be stratum or pure stratum for pure strata)

		var obj1 = [{}, {}, {}]
		console.log("Tests.Validation.isStrata() on", obj1, "EXPECTED TRUE")
		assert.equal(new Test().Validation.isStrata(obj1), true)
		console.log("Tests.Validation.isStrata() RESULT", new Test().Validation.isStrata(obj1))

		console.log("Tests.Validation.isStrata() on", obj1[0], "EXPECTED FALSE")
		assert.equal(new Test().Validation.isStrata(obj1[0]), false)
		console.log("Tests.Validation.isStrata() RESULT", new Test().Validation.isStrata(obj1[0]))

		
	}

	testIsObject(){
		//w_min = assert that width is greater than w_min
		//w_max = assert that width is less than w_max
		//d_min = assert that depth is greater than d_min
		//d_max = assert that depth is less than d_max
		var obj1 = {}
		console.log("Tests.Validation.isObject() on", obj1)
		assert.equal(new Test().Validation.isObject(obj1), true)
		assert.equal(new Test().Validation.isObject(obj1, 0), true)
		assert.equal(new Test().Validation.isObject(obj1, 0, 0), true)
		assert.equal(new Test().Validation.isObject(obj1, 0, 0, 0), true)
		assert.equal(new Test().Validation.isObject(obj1, 0, 0, 0, 0), true)
		console.log("Tests.Validation.isObject() PASSES")

		var obj2 = {'somekey':'somevalue'}
		console.log("Tests.Validation.isObject() on", obj2)
		assert.equal(new Test().Validation.isObject(obj2), true)
		assert.equal(new Test().Validation.isObject(obj2, 1), true)
		assert.equal(new Test().Validation.isObject(obj2, 1, 1), true)
		assert.equal(new Test().Validation.isObject(obj2, 1, 1, 0), true)
		assert.equal(new Test().Validation.isObject(obj2, 1, 1, 0, 0), true)
		console.log("Tests.Validation.isObject() PASSES")


		var obj3 = {'somekey':{'somekey':'somevalue'}}
		console.log("Tests.Validation.isObject() on", obj3)
		assert.equal(new Test().Validation.isObject(obj3), true)
		assert.equal(new Test().Validation.isObject(obj3, 1), true)
		assert.equal(new Test().Validation.isObject(obj3, 1, 1), true)
		assert.equal(new Test().Validation.isObject(obj3, 1, 1, 1), true)
		assert.equal(new Test().Validation.isObject(obj3, 1, 1, 1, 1), true)
		console.log("Tests.Validation.isObject() PASSES")

		var obj4 = {
			'somekey1':{'somekey1':'somevalue', 'somekey2':'somevalue'}, 
			'somekey2':{'somekey1':'somevalue', 'somekey2':'somevalue'}
		}

		console.log("Tests.Validation.isObject() on", obj4)
		assert.equal(new Test().Validation.isObject(obj4), true)
		assert.equal(new Test().Validation.isObject(obj4, 2), true)
		assert.equal(new Test().Validation.isObject(obj4, 2, 2), true)
		assert.equal(new Test().Validation.isObject(obj4, 2, 2, 1), true)
		assert.equal(new Test().Validation.isObject(obj4, 2, 2, 1, 1), true)
		console.log("Tests.Validation.isObject() PASSES")

	}

	testGetters(){

	}
}