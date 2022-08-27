import * as assert  from "node:assert";

class Null{
    constructor(){

    }

    isNullType(n){
		//ng means assert that integer n is greater than ng
		//nl means assert that integer n is less than nl
		try{
			assert.equal([null, false, NaN, 0, '0'].includes(n), true)
		}catch(err){
			return false
		}

		return true
	}

    randomNull(except){
		var NullType = this.randomSample([null, false, NaN, 0, '0'])
		if(this.comparators.isEqual(NullType, except)){
			return this.randomNull(except)
		}else{
			return NullType
		}
	}

    isEqual(thing1, thing2, equal=[true]){
		if(this.types.isNullType(thing1)&&this.types.isNullType(thing2)){
			if(typeof thing1 === typeof thing2){
				return equal[0]
			}else{
				equal[0]=false
				return false
			}
		}else{
			equal[0]=false
			return false
		}
		return equal[0]
	}
    
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}