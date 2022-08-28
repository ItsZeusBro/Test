import * as assert  from "node:assert";

export class Random{
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