import * as assert  from "node:assert";
import { Test } from "../Test.js";

export class Validation{
	constructor(){

		this.testIsInteger()
	}

	testIsInteger(){
		var n = 10;
		var n_min=10;
		var n_max=10;
		assert.equal(new Test().Validation.isInteger(n, n_min, n_max), true)

		n_min=11;
		assert.equal(new Test().Validation.isInteger(n, n_min, n_max), false)

		n_min=10;
		n_max=9;
		assert.equal(new Test().Validation.isInteger(n, n_min, n_max), false)

	}

	testIsArray(){
		
		assert.equal(new Test().Validation.isArray())
	}

	testIsStrata(){
		new Test().Validation.isStrata()

	}

	testIsObject(){
		new Test().Validation.isObject()

	}

	testIsString(){
		new Test().Validation.isString()

	}
}