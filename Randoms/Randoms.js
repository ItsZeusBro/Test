import { Comparators } from "../Comparators/Comparators.js";
import {Types} from "../Types/Types.js"
import * as assert from "node:assert"
export class Randoms{
	constructor(){
		this.comparators = new Comparators()
	}
	//RANDOM GENERATORS----------------------------------------------------
	randomPrimitive(n, except){
		return eval(
			this.randomSample(
				[
					'this.randomString', 
					'this.randomInteger', 
					'this.randomObject', 
					'this.randomNull'
				]
			)+'(n, except)')}

	randomNull(except){
		var NullType = this.randomSample([null, undefined, NaN, 0, '0'])
		if(this.comparators.isEqual(NullType, except)){
			return this.randomNull(except)
		}else{
			return NullType
		}
	}

	randomSample(arr){
		var sample = arr[this.randomRange(0, arr.length-1)]
		return sample
	}

	randomString(n, except){
		var str = this._genString(n)
		if(this.comparators.isEqual(str, except)){
			return this.randomString(n, except)
		}else{
			return str
		}
		
	}
	randomStringArray(n, except){
		var arr=[]; 
		for(var i=0;i<n;i++){arr.push(this._genString(n))}; 
		if(this.comparators.isEqual(arr, except)){
			return this.randomStringArray(n, except)
		}else{
			return arr
		}
	}
	_genString(len, chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'){
        //programiz.com
        var str='';
        for (var i = 0; i<len; i++){str+=chars.charAt(Math.floor(Math.random()*chars.length))}
        return str;
    }

    randomInteger(n, except){
		var int = this.randomRange(0,n);
		if(this.comparators.isEqual(int, except)){
			return this.randomInteger(n, except)
		}else{
			return int
		}
		
	}

	randomIntegerArray(n, except){
		var arr=[]; 
		for(var i=0; i<n; i++){arr.push(this.randomRange(0, n))};
		if(this.comparators.isEqual(arr, except)){
			return this.randomIntegerArray(n, except)
		}else{
			return arr
		}

	}

    randomArray(n, except){
		var arr=[]; 
		for(var i=0;i<n;i++){
			arr.push(this.randomPrimitive(n))
		}; 
		if(this.comparators.isEqual(arr, except)){
			return this.randomArray(n, except)
		}else{
			return arr;
		}
	}

	randomMatrix(n, except){

	}

    // randEnc(n){return "utf8"}
    // randEncArr(n){return ['utf8']}

	randomArrayObject(n, except){
		var arrObj={}
		for(var i=0; i<n; i++){
			arrObj[this.randomString(n)]=this.randomArray(n)
		}

		if(this.comparators.isEqual(arrObj, except)){
			return this.randomArrayObject(n, except)
		}else{
			return arrObj
		}
	}

    randomObject(n, except){
		var obj = this._randomObject(n)

		if(this.comparators.isEqual(obj, except)){
			return this.randomObject(n, except)
		}else{
			return obj
		}
	}

	randomObjectArray(n, except){
		var objArr=[]
		for(var i=0; i<n; i++){
			objArr.push(this._randomObject(n))
		}

		if(this.comparators.isEqual(objArr, except)){
			return this.randomObject(n, except)
		}else{
			return objArr
		}
	}

	_randomObject(n){
		var obj={}
			if(n){
				for(var i=0; i<n; i++){
					obj[this.randomString(n)]=this._randomObject(n-1)
				}
			}
			return obj
	}

	randomTree(n, except){

	}


	randomStrata(n, m, pk, except, strata=null){
		
	}


    randomSelection(bag, except){
		var selection = bag[Math.floor(Math.random() * bag.length)];

		if(this.comparators.isEqual(selection, except)){
			return this.randomSelection(bag, except)
		}else{
			return selection
		}
    }
    randomRange(min, max, except){
		var range = Math.floor(Math.random()*(max-min+1)+min)

        if(this.comparators.isEqual(range, except)){
			return this.randomRange(min, max, except)
		}else{
			return range
		}
    }


    randomModulo10(){
        return Math.floor(Math.random()*(100-0+1)+0)%2
    }
	
	uniqueId(){
		return Date.now().toString(36) + Math.random().toString(36).substr(2);
	}
}

var randoms = new Randoms()
var comparators = new Comparators()
var prim;
for(var i = 0; i<5; i++){
	prim = randoms.randomPrimitive(5, prim)
	console.log(prim)
}

var string;
for(var i = 0; i<5; i++){
	string = randoms.randomString(5, string)
	console.log(string)
}


var integer;
for(var i = 0; i<5; i++){
	integer = randoms.randomInteger(1, integer)
	console.log(integer)
}

var NullType;
for(var i = 0; i<5; i++){
	NullType = randoms.randomNull(NullType)
	console.log(NullType)
}

var integerArray;
for(var i = 0; i<5; i++){
	integerArray = randoms.randomIntegerArray(5, integerArray)
	console.log(integerArray)
}

var stringArray;
var prev;
for(var i = 0; i<10; i++){
	prev=stringArray
	stringArray = randoms.randomStringArray(1, stringArray)
	console.log(prev, stringArray)
	assert.equal(comparators.isEqual(prev, stringArray), false)
}

var array;
prev = undefined;
for(var i = 0; i<10; i++){
	prev=array
	array = randoms.randomArray(1, array)
	console.log(prev, array)
	assert.equal(comparators.isEqual(prev, array), false)
}



var object;
prev = undefined;
for(var i = 0; i<100; i++){
	prev=object
	object = randoms.randomObject(4, object)
	console.log(prev, object)
	assert.equal(comparators.isEqual(prev, object), false)
}

var objectArray;
prev = undefined;
for(var i = 0; i<100; i++){
	prev=objectArray
	objectArray = randoms.randomObjectArray(1, objectArray)
	console.log(prev, objectArray)
	assert.equal(comparators.isEqual(prev, objectArray), false)
}

var arrayObject;
prev = undefined;
for(var i = 0; i<100; i++){
	prev=arrayObject
	arrayObject = randoms.randomArrayObject(3, arrayObject)
	console.log(prev, arrayObject)
	assert.equal(comparators.isEqual(prev, arrayObject), false)
}