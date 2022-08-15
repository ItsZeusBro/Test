export class Test{
	//RANDOM GENERATORS----------------------------------------------------
	randStr(n, array=false){
		if(array){
			var arr=[]; 
			for(var i=0;i<n;i++){arr.push(this.genStr(this.randRange(0, n)))}; 
			return arr;
		}else{
			return this.genStr(this.randRange(0, n));
		}
	}

    randInt(n, array=false){
		if(array){
			var arr=[]; 
			for(var i=0; i<n; i++){arr.push(this.randRange(0, n))};
			return arr;
		}else{
			return this.randRange(0,n);
		}
	}

    randArr(n, array=false){
		if(array){
			var arrOfArr=[]
			for(var i = 0; i<n; i++){
				var arr = []
				for(var j=0;j<n;j++){
					arr.push(this.rand(n))
				}; 
				arrOfArr.push(arr)
			}
			return arrOfArr
		}else{
			var arr=[]; 
			for(var i=0;i<n;i++){
				arr.push(this.rand(n))
			}; 
			return arr;
		}
		
	}

	//if the object value is strata then this is recursive
	// [
	// 		{
	// 			'key': (recursive strata or base value)
	// 		},
	// 		{
	// 			'key': (recursive strata, or base value)
	// 		}
	// ]
	//randStrata will represent a base case strata can be adapted to be recursive strata
	//where n is the number of objects in the strata array
	randStrata(strata=[], pk=[]){
		//we have n number of strata objects per strata array
		//we have n number of layers to strata
		//we have 1 possible base case per strata object, whose associated value is undefined
		//the strataObj[key]=_baseStrata() which can be reasigned with strataObj[key]=_baseStrata (recursively)
		//every strataObj has one key that is not payload that can be obtained with strataKey()
	}

	_baseStrata(){

	}

	//strata is always an array of objects, each with a single key associated with undefined or another strata
	_recursiveStrata(strata){

	}

	strataKey(strataObj, pk){
		for(var i = 0; i<Object.keys(strataObj).length; i++){
			//if there is more than one strataKey, throw error (to catch bugs)
			
		}
	}



    rand(n){return eval(this.sample(['this.randStr', 'this.randInt', 'this.randObj'])+'(n, this.randMod10())')}
    // randEnc(n){return "utf8"}
    // randEncArr(n){return ['utf8']}
    randObj(n, array=false){
		//O(nlognlogn) growth complexity
		if(array){
			var objArr=[]
			for(var i=0; i<n; i++){
				objArr.push(this._randObj(n))
			}
			return objArr
		}else{
			return this._randObj(n)
		}
	};
	_randObj(n){
		var obj={}
			if(n){
				for(var i=0; i<n; i++){
					obj[this.randStr(20)]=this._randObj(n-1)
				}
			}
			return obj
	}

    randSelection(bag){
        return bag[Math.floor(Math.random() * bag.length)];
    }
    randRange(min, max){
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    genStr(len, chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'){
        //programiz.com
        var str='';
        for (var i = 0; i<len; i++){str+=chars.charAt(Math.floor(Math.random()*chars.length))}
        return str;
    }
    randMod10(){
        return Math.floor(Math.random()*(100-0+1)+0)%2
    }
	sample(arr){
		return arr[this.randRange(0, arr.length-1)]
	}

	//VALIDATION-----------------------------------------------------
	//gt is greater than n nested levels, lt is less than n nested levels, eq is equal to n nested levels
	//gn is greater than n objects per strata, ln is less than n objects per strata, en is equal to n objects per strata
	isStrata(gn, ln, en, gt, lt, eq){
		
	}
	isInt(gt, lt, eq){

	}
	isArray(gt, lt, eq){

	}
	isObj(gt, lt, eq){

	}

	isStr(gt, lt, eq){

	}

	


	//COMPARATORS----------------------------------------------------

	isEqualObj(obj1, obj2, equal=[true]){
		if(
				(!equal[0])
			||
				(typeof obj1 !=='object')
			||
				(typeof obj2 !=='object')
		){
			equal[0]=false
			return equal[0]
		}else{
			if(this.isEqualArr(Object.keys(obj1), Object.keys(obj2), equal)){
				for(var i=0; i<Object.keys(obj1).length; i++){
					if(!this.isEqual(obj1[Object.keys(obj1)[i]], obj2[Object.keys(obj2)[i]], equal)){
						equal[0]=false
						return equal[0]
					}
				}
				return equal[0]
			}else{
				equal[0]=false
				return equal[0]
			}
		}
    }

    isEqualStr(str1, str2, equal=[true]){
        if(
				(!equal[0])
			||
				(typeof str1 !=='string')
			||
				(typeof str2 !=='string')
		){
			equal[0]=false
			return equal[0]
		}
		else if(
				(
						str1.length==1
					&&
						str2.length==1
					&&
						str1[0]==str2[0]
				)
			||
				(
						str1.length==0
					&&
						str2.length==0
				)
		){
			return equal[0]
		}
		else if(str1[0]==str2[0]){
			return this.isEqualStr(str1.slice(1), str2.slice(1), equal)
		}else{
			equal[0]=false
			return equal[0]
		}
    }

    isEqualNumber(num1, num2, equal=[true]){
        if(
				(!equal[0])
			||
				(typeof num1 !=='number')
			||
				(typeof num2 !=='number')
		){
			equal[0]=false
			return equal[0]
		}else if(num1==num2){
			return equal[0]
		}else{
			equal[0]=false
			return equal[0]
		}
    }

    isEqualArr(arr1, arr2, equal=[true]){
        if(
				(!equal[0])
			||
				(arr1.length!=arr2.length))
		{
			equal[0]=false
			return equal[0]
		}else if((Array.isArray(arr1)&& Array.isArray(arr2))){
			for(var i = 0; i< arr2.length; i++){
				if(typeof arr1[i]!== typeof arr2[i]){
					equal[0]=false
					return equal[0]
				}else{
					this.isEqual(arr1[i], arr2[i], equal)
				}
			}
			return equal[0]
        }else{
            equal[0]=false
            return equal[0]
        }
    }

	isEqualStrata(strata1, strata2, equal=[true]){

	}

    isEqual(thing1, thing2, equal=[true]){
        if(!equal[0]){
			return equal[0]
		}else if(typeof thing1 !== typeof thing2){
            equal[0]=false
            return equal[0]
        }else{
			if(Array.isArray(thing1)){
                return this.isEqualArr(thing1, thing2, equal)
            }else if(typeof thing1 === 'number'){
                return this.isEqualNumber(thing1, thing2, equal)
            }else if(typeof thing1 === 'string'){
                return this.isEqualStr(thing1, thing2, equal)
            }else if(typeof thing1 === 'object'){
                return this.isEqualObj(thing1, thing2, equal)
            }else if(this.isStrata(thing1)){
                return this.isEqualStrata(thing1, thing2, equal)
            }else if(!thing1 && !thing2){
				return equal[0]
			}
			else{
                //other types for the future
            }
        }
		console.log("should never run")
    }
    //The problem with equality recursive functions:
    //if everything is assumed true and proven false, you may have edge cases that turn out to be true when they are not
    //if everything is assumed false and proven true, and you use the same reference variable for reporting true, 
    //then if one deep thing is true, it might slip through and be generalized upon
    //if you dont use a reference variable, you cant report on the whole state across recursive functions and levels of recursivity
    //but if you dont use a reference variable, its safer to assume false and prove true, but your recursion has to be perfect all the time
    //we choose to assume true, because its easy to short circuit a recursive function upon its falsehood as the first
    //statement of all equality recursive functions
}