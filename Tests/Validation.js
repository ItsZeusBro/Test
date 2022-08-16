import * as assert  from "node:assert";
import { Test } from "../Test.js";

export class Validation{
	constructor(){

		this.testIsInteger()
		this.testIsArray()
		this.testIsString()
		this.testIsObject()
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

	testIsStrata(){
		new Test().Validation.isStrata()
	}

	testIsObject(){
		new Test().Validation.isObject()
	}


}