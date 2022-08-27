import * as assert  from "node:assert";

class Random{
    constructor(){

    }
    //RANDOM GENERATORS----------------------------------------------------
    random(except, n){
        var sample = this.randomSample(this.randomTypes)
        if(sample=='null-type'){
            return eval('this.randomNull'+'(except, n)')
        }else if(sample=='string'){
            return eval('this.randomString'+'(except, n)')
        }else if(sample=='integer'){
            return eval('this.randomInteger'+'(except, n)')
        }else if(sample=='array'){
            return eval('this.randomArray'+'(except, n)')
        }else if(sample=='object'){
            return eval('this.randomObject'+'(except, n)')
        }else if(sample=='integer-array'){
            return eval('this.randomIntegerArray'+'(except, n)')
        }else if(sample=='string-array'){
            return eval('this.randomStringArray'+'(except, n)')
        }else if(sample=='object-array'){
            return eval('this.randomObjectArray'+'(except, n)')
        }else if(sample=='strata'){
            return eval('this.randomStratum'+'(except, n)')
        }else if(sample=='pure-strata'){
            return eval('this.randomPureStrata'+'(except, n)')
        }else if(sample=='stratum'){
            return eval('this.randomStratum'+'(except, n)')
        }else if(sample=='pure-stratum'){
            return eval('this.randomPureStratum'+'(except, n)')
        }else if(sample=='tree'){
            return eval('this.randomTree'+'(except, n)')
        }else if(sample=='matrix'){
            return eval('this.randomMatrix'+'(except, n)')
        }
    }
    randomSample(arr){
		return arr[this.randomRange(0, arr.length-1)]
	}

    assertRandomness(set, similarity=0.75, _throw=false, verbose=false){
		//use comparator isEqual and statistical distribution calculation to assert randomness
		//things must be disimilar at the similarity threshold
		set = set.slice()
		var similar=0;
		var disimilar=0;
		var _set=[]
		for(var i = 0; i<set.length; i++){
			if(_set){
				if(_set.includes(set[i])){
					similar+=1
				}else{
					disimilar+=1
				}
				_set.push(set.shift())
			}else{
				_set.push(set.shift())
			}
		}
		try{
			assert.equal(similar/disimilar<=similarity, true)
			console.log(similar/disimilar)
			return true
		}catch(err){
			if(_throw&&verbose){
				console.log(err)
				throw Error('assertRandomness failure', set, similarity, similar/disimilar)
			}else if(_throw){
				throw Error('assertRandomness failure', set, similarity, similar/disimilar)
			}else{
				return false
			}
		}
			
	}

    isRandom(thing, types){
		for(var i = 0; i<types.length; i++){
			if(types[i]=='string'){
				if(this.isString(thing)){return true}
				continue
			}else if(types[i]=='integer'){
				if(this.isInteger(thing)){return true}
				continue
			}else if(types[i]=='array'){
				if(this.isArray(thing)){return true}
				continue
			}else if(types[i]=='object'){
				if(this.isObject(thing)){return true}
				continue
			}else if(types[i]=='null-type'){
				if(this.isNullType(thing)){return true}
				continue
			}else if(types[i]=='strata'){
				if(this.isStrata(thing)){return true}
				continue
			}else if(types[i]=='pure-strata'){
				if(this.isPureStrata(thing)){return true}
				continue
			}else if(types[i]=='stratum'){
				if(this.isStratum(thing)){return true}
				continue
			}else if(types[i]=='pure-stratum'){
				if(this.isPureStratum(thing)){return true}
			}
		}
		return false
	}
    getType(thing){
		var type;
		if(this.isString(thing)){type='string'}
		if(this.isInteger(thing)){type='integer'}
		if(this.isNullType(thing)){type='null-type'}
		if(this.isArray(thing)){type='array'}
		if(this.isObject(thing)){type='object'}
		if(this.isIntegerArray(thing)){type='integer-array'}
		if(this.isObjectArray(thing)){type='object-array'}
		if(this.isStrata(thing)){type='strata'}
		if(this.isStratum(thing)){type='stratum'}
		if(this.isPureStrata(thing)){type='pure-strata'}
		if(this.isStratum(thing)){type='pure-stratum'}
		if(this.isTree(thing)){type='tree'}
		if(this.isMatrix(thing)){type='matrix'}
	}


    apply(func, on, assertion){
        //apply a function on a list, object, integer, function should return assertion value
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