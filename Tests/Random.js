import { Test } from "../Test.js";
import * as assert from "node:assert";
export class Random{
	constructor(n){
		this.randString(n)
		this.randInteger(n)
		this.randArray(n)
		this.randObject(n)
	}

	randString(n){
		var str = new Test().Random.randString(n)
		console.log("randString", str)
		assert.equal(typeof str === 'string', true)
		assert.equal(str.length<=n, true)

		var strArr = new Test().Random.randString(n, true)
		console.log("randString array", strArr)
		assert.equal(Array.isArray(strArr), true)
		for(var i=0; i<strArr.length; i++){
			assert.equal(typeof strArr[i] === 'string', true)
			assert.equal(strArr[i].length<=n, true)
		}
	}

	randInteger(n){
		var int = new Test().Random.randInteger(n)
		console.log("randInteger", int)
		assert.equal(typeof int === 'number', true)
		assert.equal(int<=n, true)

		var intArr = new Test().Random.randInteger(n, true)
		console.log("randInteger array", intArr)
		assert.equal(Array.isArray(intArr), true)
		for(var i=0; i<intArr.length; i++){
			assert.equal(typeof intArr[i] === 'number', true)
			assert.equal(intArr[i]<=n, true)
		}
	}

	randArray(n){
		var arr = new Test().Random.randArray(n)
		console.log("randArray", arr)
		assert.equal(Array.isArray(arr), true)
		assert.equal(arr.length<=n, true)

		var arrOfArr = new Test().Random.randArray(n, true)
		console.log("randArray array", arrOfArr)
		assert.equal(Array.isArray(arrOfArr), true)
		for(var i=0; i<arrOfArr.length; i++){
			assert.equal(Array.isArray(arrOfArr[i]), true)
			assert.equal(arrOfArr.length<=n, true)
		}
	}

	randObject(n){
		var obj = new Test().Random.randObject(n)
		console.log('randObject', obj)
		assert.equal(typeof obj === 'object', true)
		this._randObject(n, obj)

		var objArr = new Test().Random.randObject(n, true)
		console.log("randObject array", objArr)
		assert.equal(Array.isArray(objArr), true)
		for(var i=0; i<objArr.length; i++){
			assert.equal(typeof objArr[i] === 'object', true)
			this._randObject(n, objArr[i])
		}
		
	}
	_randObject(n, obj){
		for(var i=0; i<n-1; i++){
			var key = Object.keys(obj)[i]
			assert.equal(typeof key === 'string', true)
			assert.equal(obj[key]!=undefined, true)
			this._randObject(n-1, obj[key])
		}
	}
}