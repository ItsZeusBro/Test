import * as assert from "node:assert";
import { Randoms } from "../Randoms/Randoms.js";
import { Types } from "../Types/Types.js";
export class RandomsTest{
	constructor(n){
		this.types = new Types()
		this.randomString(n)
		this.randomInteger(n)
		this.randomArray(n)
		this.randomObject(n)
	}

	randomString(n){
		var str = new Randoms().randomString(n)
		console.log("randomString", str)
		assert.equal(this.types.isString(str), true)
		assert.equal(str.length<=n, true)

		var strArr = new Randoms().randomString(n, true)
		console.log("randomString array", strArr)
		assert.equal(this.types.isArray(strArr), true)
		for(var i=0; i<strArr.length; i++){
			assert.equal(this.types.isString(strArr[i]), true)
			assert.equal(strArr[i].length<=n, true)
		}
	}

	randomInteger(n){
		var int = new Randoms().randomInteger(n)
		console.log("randomInteger", int)
		assert.equal(this.types.isInteger(n), true)
		assert.equal(int<=n, true)

		var intArr = new Randoms().randomInteger(n, true)
		console.log("randomInteger array", intArr)
		assert.equal(this.types.isArray(intArr), true)
		for(var i=0; i<intArr.length; i++){
			assert.equal(this.types.isInteger(intArr[i]), true)
			assert.equal(intArr[i]<=n, true)
		}
	}

	randomArray(n){
		var arr = new Randoms().randomArray(n)
		console.log("randArray", arr)
		assert.equal(this.types.isArray(arr), true)
		assert.equal(arr.length<=n, true)

		var arrOfArr = new Randoms().randomArray(n, true)
		console.log("randArray array", arrOfArr)
		assert.equal(this.types.isArray(arrOfArr), true)
		for(var i=0; i<arrOfArr.length; i++){
			assert.equal(this.types.isArray(arrOfArr[i]), true)
			assert.equal(arrOfArr.length<=n, true)
		}
	}

	randomObject(n){
		var obj = new Randoms().randomObject(n)
		console.log('randObject', obj)
		assert.equal(this.types.isObject(obj), true)
		this._randomObject(n, obj)

		var objArr = new Randoms().randomObject(n, true)
		console.log("randObject array", objArr)
		assert.equal(this.types.isArray(objArr), true)
		for(var i=0; i<objArr.length; i++){
			assert.equal(this.types.isObject(objArr[i]), true)
			this._randomObject(n, objArr[i])
		}
		
	}
	_randomObject(n, obj){
		for(var i=0; i<n-1; i++){
			var key = Object.keys(obj)[i]
			assert.equal(this.types.isString(key), true)
			assert.equal(obj[key]!=undefined, true)
			this._randomObject(n-1, obj[key])
		}
	}
}