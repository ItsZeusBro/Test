import * as assert  from "node:assert";

export class _Integer{
    constructor(min, max){
        this.min=min
        this.max=max
    }
    context(integer){
        return {
			'type':'integer',
			'integer':integer,
            'min':this.min,
            'max':this.max
        }
    }

    is(integer){
        if(integer){
			try{
				assert.equal(this._isInteger(integer), true)
			}catch{
				return
			}

            if(this.min){
				try{
					assert.equal(this.min <= integer, true)
				}catch{
					return
				}
            }

            if(this.max){
				try{
					assert.equal(this.max >= integer, true)
				}catch{
					return
				}
            }
			return this.context(integer)
        }

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