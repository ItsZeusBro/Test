import { Comparators } from "../Comparators/Comparators.js";
import {Types} from "../Types/Types.js"
import * as assert from "node:assert"
import * as util from "node:util"

export class Randoms{
	constructor(descriptor){
		this.arrWidth=descriptor['arrWidth']
		this.objWidth=descriptor['objWidth']
		this.mtxDepth=descriptor['mtxDepth']
		this.treeDepth=descriptor['treeDepth']
		this.payload=descriptor['payload']
		this.minInt=descriptor['minInt']
		this.maxInt=descriptor['maxInt']
		this.minStr=descriptor['minStr']
		this.maxStr=descriptor['maxStr']
		this.charSet=descriptor['charSet']
		this.types = new Types()
		this.comparators = new Comparators()
	}
	//RANDOM GENERATORS----------------------------------------------------
	random(except,n){
		var sample = this.randomSample(
			[
				'this.randomString', 
				'this.randomInteger', 
				'this.randomArray',
				 'this.randomNull',
				'this.randomStringArray',
				'this.randomIntegerArray'
				// 'this.randomObject',
				// 'this.randomMatrix',
				// 'this.randomObjectOfArrays',
				// 'this.randomArrayOfObjects',
				// 'this.randomTree'
			]
		)
		if(sample=='this.randomNull'){
			return eval(sample+'(except, n)')
		}else{
			return eval(sample+'(except, n)')
		}
		
	}

	randomNull(except){
		var NullType = this.randomSample([null, false, NaN, 0, '0'])
		if(this.comparators.isEqual(NullType, except)){
			return this.randomNull(except)
		}else{
			return NullType
		}
	}

	randomSample(arr){
		return arr[this.randomRange(0, arr.length-1)]
	}


	_genString(){
        var str='';
        for (var i=0; i<this.randomRange(this.minStr, this.maxStr); i++){
			str+=this.charSet.charAt(Math.floor(Math.random()*this.charSet.length))
		}
        return str;
    }

	randomString(except){
		var str = this._genString()
		if(this.comparators.isEqual(str, except)){
			return this.randomString(except)
		}else{
			return str
		}
	}

	randomStringArray(except, n=this.arrWidth){
		var arr=[]; 
		for(var i=0; i<n; i++){
			arr.push(this._genString())
		}; 
		if(this.comparators.isEqual(arr, except)){
			return this.randomStringArray(except, n)
		}else{
			return arr
		}
	}



    randomInteger(except){
		var int = this.randomRange(this.minInt, this.maxInt);
		if(this.comparators.isEqual(int, except)){
			return this.randomInteger(except)
		}else{
			return int
		}
	}

	randomIntegerArray(except, n=this.arrWidth){
		var arr=[]; 

		for(var i=0; i<n; i++){arr.push(this.randomRange(this.minInt, this.maxInt))};

		if(this.comparators.isEqual(arr, except)){
			return this.randomIntegerArray(except)
		}else{
			return arr
		}
	}

    randomArray(except, n=this.arrWidth){
		var arr=[]; 
		for(var i=0; i<n; i++){
			arr.push(this.random(except, n-1))
		}; 
		if(this.comparators.isEqual(arr, except)){
			return this.randomArray(except)
		}else{
			return arr;
		}
	}


	randomMatrix(except, n=this.mtxDepth){
		var mtx=[]
		if(n==1){
			return this.randomArray(except)
		}else if(n){
			for(var i=0; i<n; i++){
				mtx.push(this.randomMatrix(except, n-1))
			}
		}
		return mtx
	}

    // randEnc(n){return "utf8"}
    // randEncArr(n){return ['utf8']}

	randomObjectOfArrays(except, n){
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

    randomTree(except, n){
		var obj = this._randomTree(n)

		if(this.comparators.isEqual(obj, except)){
			return this.randomTree(n, except)
		}else{
			return obj
		}
	}

	_randomTree(n){
		var obj={}
		if(n==1){
			obj[this.randomString(n)]=this.random(3)
		}else if(n){
			for(var i=0; i<n; i++){
				obj[this.randomString(n)]=this._randomObject(n-1)
			}
		}
		return obj
	}

	randomObject(n, except){
		var obj = {}
		for(var i = 0; i<n; i++){
			obj[this.randomString(n)]=this.random(n-1)
		}
		if(this.comparators.isEqual(obj, except)){
			return this.randomObject(n, except)
		}else{
			return obj
		}
	}

	randomArrayOfObjects(n, except){
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
	

	//TODO:
	randomStratum(n){

	}

	randomPureStratum(n){

	}

	randomStrata(n, payload={'keys':['payload'], 'patterns':[]}, except=undefined){

	}

	_randomStrata(n, payload, strata){
		
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

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }


}

