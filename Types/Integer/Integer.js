import * as assert  from "node:assert";

class Integer{
    constructor(){

    }

    isInteger(n, n_min, n_max){
		//ng means assert that integer n is greater than ng
		//nl means assert that integer n is less than nl

		if(n && n_min && n_max){
			try{
				assert.equal(this._isInteger(n), true)
				assert.equal(n>=n_min, true)
				assert.equal(n<=n_max, true)
			}catch(err){
				return false
			}
		}else if(n && n_min){
			try{
				assert.equal(this._isInteger(n), true)
				assert.equal(n>=n_min, true)
			}catch(err){
				return false
			}
		}else if(n && n_max){
			try{
				assert.equal(this._isInteger(n), true)
				assert.equal(n<=n_max, true)
			}catch(err){
				return false
			}
		}else if(n||n==0){
			try{
				assert.equal(this._isInteger(n), true)
			}catch(err){
				return false
			}
		}else{
			return false
		}
		return true
	}

    _isInteger(int){
		//console.log('_isInteger(',int,')', Number.isInteger(int))
		return (Number.isInteger(int));
	}

    randomInteger(except){
		var int = this.randomRange(this.minInt, this.maxInt);
		if(this.comparators.isEqual(int, except)){
			return this.randomInteger(except)
		}else{
			return int
		}
	}

    assertIntRange(int, int_min, int_max){
		if(!this._isInteger(int)){return false}
		if(int_min&&int_max){
			try{
				assert.equal(int>=int_min, true)
				assert.equal(int<=int_max, true)
			}catch{
				return false
			}
		}else if(int_min){
			try{
				assert.equal(int>=int_min, true)
			}catch{
				return false
			}
		}else if(int_max){
			try{
				assert.equal(int<=int_max, true)
			}catch{
				return false
			}
		}else{
			return false
		}
		return true
	}
	
    isEqual(num1, num2, equal=[true]){
		if(this.types.isInteger(num1)&&this.types.isInteger(num2)){
			if(num1==num2){
				return true
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