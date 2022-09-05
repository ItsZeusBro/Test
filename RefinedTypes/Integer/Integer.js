import * as assert  from "node:assert";

export class _Integer{
    constructor(min, max){this.min=min; this.max=max}

    context(integer){return {'type':'integer','data':integer,'min':this.min,'max':this.max}}

    is(integer){if(integer){try{this.assert(integer)}catch{return;}return this.context(integer)}}

    random(min, max){
        var _min; var _max;
        if(min){_min=min}else if(this.min || this.min==0){_min=this.min}else{_min=-10000}
        if(max){_max=max}else if(this.max){_max=this.max}else{_max=10000}
        return this.context(this._randomRange(_min, _max))
    }

    assert(integer, min, max){
        if(integer){assert.equal(this._isInteger(integer), true)}
        if(min){assert.equal(integer>=min, true)}
        else if(this.min){assert.equal(integer>=this.min, true)}
        if(max){assert.equal(integer<=max, true)}
        else if(this.max){assert.equal(integer<=this.max, true)}
        return true
    }
    
    _isInteger(integer){return Number(integer) === integer && integer % 1 === 0;}
    

    _randomRange(min, max){return Math.floor(Math.random()*(max-min+1)+min)}

    _log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}

