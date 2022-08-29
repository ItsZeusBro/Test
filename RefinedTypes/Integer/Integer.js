import * as assert  from "node:assert";

export class _Integer{
    constructor(min, max){
        this.min=min
        this.max=max
    }
    context(){
        return {
            'min':this.min,
            'max':this.max,
        }
    }
    is(integer){
        //return true if it is an integer
        if(integer && this.min && this.max){
			try{
				assert.equal(this._isInteger(integer), true)
				assert.equal(integer>=this.min, true)
				assert.equal(integer<=this.max, true)
			}catch(err){
				return
			}
		}else if(integer && this.min){
			try{
				assert.equal(this._isInteger(integer), true)
				assert.equal(integer>=this.min, true)
			}catch(err){
				return
			}
		}else if(integer && this.max){
			try{
				assert.equal(this._isInteger(integer), true)
				assert.equal(integer<=this.max, true)
			}catch(err){
				return
			}
		}else if(integer || integer==0){
			try{
				assert.equal(this._isInteger(integer), true)
			}catch(err){
				return
			}
		}else{
			return
		}
		return 'integer'
    }

    _isInteger(integer){
		return Number.isInteger(integer);
	}

    exists(){return true}
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}