import * as assert  from "node:assert";

//A random type is a construct of schema that describes one of the other primitive types
//in a very specific way and has functions that return those random values and also has functions
//that supports random types
export class _Random{
    constructor(){

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

    randomSelection(bag, except){
		var selection = bag[Math.floor(Math.random() * bag.length)];

		if(this.comparators.isEqual(selection, except)){
			return this.randomSelection(bag, except)
		}else{
			return selection
		}
    }

    

    randomModulo10(){
        return Math.floor(Math.random()*(100-0+1)+0)%2
    }
	
	uniqueId(){
		return Date.now().toString(36) + Math.random().toString(36).substr(2);
	}
    is(random){
        //return true if it is a random type 
        //what is a random type? I dont know yet... 
    }
    exists(){return true}
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }

}