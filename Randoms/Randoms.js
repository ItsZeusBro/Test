import { Comparators } from "../Comparators/Comparators.js";

export class Randoms{
	constructor(){
		this.comparators = new Comparators()
	}
	//RANDOM GENERATORS----------------------------------------------------
	random(n, except=null){return eval(this.randomSample(['this.randomString', 'this.randomInteger', 'this.randomObject'])+'(n, this.randomModulo10(), except)')}

	randomSample(arr, except=null){
		var sample = arr[this.randomRange(0, arr.length-1)]
		if(this.comparators.isEqual(sample, except)){
			return this.randomSample(arr, except)
		}else{
			return sample
		}
	}

	randomString(n, array=false, except=null){
		if(array){
			var arr=[]; 
			for(var i=0;i<n;i++){arr.push(this._genString(n))}; 
			if(this.comparators.isEqual(arr, except)){
				return this.randomString(n, array, except)
			}else{
				return arr
			}
		}else{
			var str = this._genString(n)
			if(this.comparators.isEqual(str, except)){
				return this.randomString(n, array, except)
			}else{
				return str
			}
		}
	}
	_genString(len, chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'){
        //programiz.com
        var str='';
        for (var i = 0; i<len; i++){str+=chars.charAt(Math.floor(Math.random()*chars.length))}
        return str;
    }

    randomInteger(n, array=false, except=null){
		if(array){
			var arr=[]; 
			for(var i=0; i<n; i++){arr.push(this.randomRange(0, n))};

			if(this.comparators.isEqual(arr, except)){
				return this.randomInteger(n, array, except)
			}else{
				return arr
			}

		}else{
			var int = this.randomRange(0,n);
			
			if(this.comparators.isEqual(int, except)){
				return this.randomInteger(n, array, except)
			}else{
				return int
			}
		}
	}

    randomArray(n, array=false, except=null){
		if(array){
			var arrOfArr=[]
			for(var i = 0; i<n; i++){
				var arr = []
				for(var j=0;j<n;j++){
					arr.push(this.random(n))
				}; 
				arrOfArr.push(arr)
			}
			if(this.comparators.isEqual(arrOfArr, except)){
				return this.randomArray(n, array, except)
			}else{
				return arrOfArr
			}
		}else{
			var arr=[]; 
			for(var i=0;i<n;i++){
				arr.push(this.random(n))
			}; 
			if(this.comparators.isEqual(arr, except)){
				return this.randomArray(n, array, except)
			}else{
				return arr;
			}
		}
	}



	randomStrata(n, m, pk, except=null, strata=null){
		
	}


    // randEnc(n){return "utf8"}
    // randEncArr(n){return ['utf8']}

    randomObject(n, array=false, except=null){
		//O(nlognlogn) growth complexity
		if(array){
			var objArr=[]
			for(var i=0; i<n; i++){
				objArr.push(this._randomObject(n))
			}

			if(this.comparators.isEqual(objArr, except)){
				return this.randomObject(n, array, except)
			}else{
				return objArr
			}
		}else{
			var obj = this._randomObject(n)

			if(this.comparators.isEqual(obj, except)){
				return this.randomObject(n, array, except)
			}else{
				return obj
			}
		}
	}

	_randomObject(n){
		var obj={}
			if(n){
				for(var i=0; i<n; i++){
					obj[this.randomString(20)]=this._randomObject(n-1)
				}
			}
			return obj
	}


    randomSelection(bag, except=null){
		var selection = bag[Math.floor(Math.random() * bag.length)];

		if(this.comparators.isEqual(selection, except)){
			return this.randomSelection(bag, except)
		}else{
			return selection
		}
    }
    randomRange(min, max, except=null){
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