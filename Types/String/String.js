import * as assert  from "node:assert";

export class String{
    constructor(min, max){
        this.min=min
        this.max=max
    }
    context(){
        return {
            'min':this.min,
            'max':this.max,
            //'pattern':undefined //some regex pattern (we need that regex generator for this feature)
        }
    }
    exists(){return true}

    is(string){
        //return true if it is a string
        if(string && this.min && this.max){
			try{
				assert.equal(this._isString(string), true)
				assert.equal(string.length>=this.min, true)
				assert.equal(string.length<=this.max, true)
			}catch(err){
				return
			}
		}else if(string && this.min){
			try{
				assert.equal(this._isString(string), true)
				assert.equal(str.length>=this.min, true)
			}catch(err){
				return
			}
		}else if(string && this.max){
			try{
				assert.equal(this._isString(string), true)
				assert.equal(string.length<=this.max, true)
			}catch(err){
				return
			}
		}else if(string){
			try{
				assert.equal(this._isString(string), true)
			}catch(err){
				return
			}
		}else{
			return
		}
		return 'string'
    }

    _isString(string) {
		return (string instanceof String || typeof(string) === 'string');
	}

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}