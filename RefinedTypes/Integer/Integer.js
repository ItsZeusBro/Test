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
			assert(this._isInteger(integer), true)

            if(this.min){
				try{
					assert(this.min <= integer)
				}catch{
					return
				}
            }

            if(this.max){
				try{
					assert(this.max >= integer)
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