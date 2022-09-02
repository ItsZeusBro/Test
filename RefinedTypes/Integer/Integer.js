import * as assert  from "node:assert";

export class _Integer{
    constructor(min, max){
        this.min=min
        this.max=max
    }
    context(integer){
        return {
			'type':'integer',
			'data':integer,
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
    random(min, max){
        var _min; var _max;
        if(min){_min=min}else if(this.min){_min=this.min}else{_min=0}
        if(max){_max=max}else if(this.max){_max=this.max}else{_max=10000}
        return this.randomRange(_min, _max)
    }

    _isInteger(integer){
		return Number.isInteger(integer);
	}

    randomRange(min, max){
        return Math.floor(Math.random()*(max-min+1)+min)
    }

    exists(){return true}

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}