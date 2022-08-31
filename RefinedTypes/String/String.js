import * as assert  from "node:assert";

export class _String{
    constructor(min, max){
        this.min=min
        this.max=max
    }
    context(string){
        return {
			'type':'string',
			'string':string,
            'min':this.min,
            'max':this.max,
            //'pattern':undefined //some regex pattern (we need that regex generator for this feature)
        }
    }
    exists(){return true}

    is(string){
        //return true if it is a string
        if(string){
			try{
				assert.equal(this._isString(string), true)
			}catch{
				return
			}

            if(this.min){
				try{
					assert.equal(this.min <= string.length, true)
				}catch{
					return
				}
            }

            if(this.max){
				try{
					assert.equal(this.max >= string.length, true)
				}catch{
					return
				}
            }
			return this.context(string)
        }
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