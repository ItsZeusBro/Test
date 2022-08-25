import * as assert from "node:assert"
import * as util from "node:util"
import {Comparators} from "../Comparators/Comparators.js"
import { Randoms } from "../Randoms/Randoms.js"
export class ComparatorsTest{
	constructor(n){
		this.testArrays(n)
		this.testObjects(n)
		this.testNumber(n)
		this.testString(n)
		this.testEquals(n)
	}

	testArrays(n){
		for(var i = 0; i<1000; i++){
			this.testArray(n);
		}
	}


	testObjects(n){
		for(var i = 0; i<1000; i++){
			this.testObject(n);
		}
	}
	//BEWARE OF TEST COLLISIONS WHEN GENERATING RANDOM OBJECTS (statistical analysis would be better)
	testArray(n){
		console.log("TEST ARRAY")

		var array1 = new Randoms().randomArray(n)
		var array2 = new Randoms().randomArray(n)

		assert.equal(new Comparators().isEqualArray(array1.slice(), array1.slice()), true)
		assert.equal(new Comparators().isEqualArray(array1.slice(), array2.slice()), false)


		console.log("TEST ARRAY PASSED")
	}

	testObject(n){
		console.log("TEST OBJ")
		var obj1 = new Randoms().randomObject(n)
		var obj2 = new Randoms().randomObject(n)
		assert.equal(new Comparators().isEqualObject(obj1, obj1), true)
		assert.equal(new Comparators().isEqualObject(obj1, obj2), false)
		console.log("TEST OBJ PASSED")
	}

	testNumber(n){
		console.log("TEST NUMBER")
		var num1 = 1234
		var num2 = 2345
		assert.equal(new Comparators().isEqualNumber(num1, num1), true)
		assert.equal(new Comparators().isEqualNumber(num1, num2), false)		
		console.log("TEST NUMBER PASSED")
	}
	testString(n){
		console.log("TEST STRING")
		var str1 = "kldsjfhasklgjhsdglaksdjgalukierhtfglkaszjgnaslgkuhaerg"
		var str2 = "kldsjfhasklgjhsdglaksdjgalukierhtfglkaszjgnaslgkuhaergkldsjfhasklgjhsdglaksdjgalukierhtfglkaszjgnaslgkuhaerg"
		assert.equal(new Comparators().isEqualString(str1, str1), true)
		assert.equal(new Comparators().isEqualString(str1, str2), false)		
		console.log("TEST STRING PASSED")
	}
	testEquals(n){
		console.log("TEST EQUAL")
		var array1 = new Randoms().randomArray(n)
		var array2 = new Randoms().randomArray(n)
		assert.equal(new Comparators().isEqual(array1.slice(), array1.slice()), true)
		assert.equal(new Comparators().isEqual(array1.slice(), array2.slice()), false)

		var obj1 = new Randoms().randomObject(n)
		var obj2 = new Randoms().randomObject(n)
		assert.equal(new Comparators().isEqual(obj1, obj1), true)
		assert.equal(new Comparators().isEqual(obj1, obj2), false)

		var num1 = 1234
		var num2 = 2345
		assert.equal(new Comparators().isEqual(num1, num1), true)
		assert.equal(new Comparators().isEqual(num1, num2), false)	


		var str1 = "kldsjfhasklgjhsdglaksdjgalukierhtfglkaszjgnaslgkuhaerg"
		var str2 = "kldsjfhasklgjhsdglaksdjgalukierhtfglkaszjgnaslgkuhaergkldsjfhasklgjhsdglaksdjgalukierhtfglkaszjgnaslgkuhaerg"
		assert.equal(new Comparators().isEqual(str1, str1), true)
		assert.equal(new Comparators().isEqual(str1, str2), false)		
		console.log("TEST EQUAL PASSED")
	}
	log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }

}
