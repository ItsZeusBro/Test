import * as assert  from "node:assert";

export class _Number{
    constructor(min, max){this.min=min; this.max=max}

    context(number){return {'type':'number','data':number,'min':this.min,'max':this.max}}

    is(number){if(number){try{this.assert(number)}catch{return;}return this.context(number)}}

    random(min, max){
        var _min; var _max;
        if(min){_min=min}else if(this.min || this.min==0){_min=this.min}else{_min=-10000}
        if(max){_max=max}else if(this.max){_max=this.max}else{_max=10000}
        return this.context(this._randomRange(_min, _max))
    }

    assert(number, min, max){
        if(min){assert.equal(number>=min, true)}
        else if(this.min){assert.equal(number>=this.min, true)}
        if(max){assert.equal(number<=max, true)}
        else if(this.max){assert.equal(number<=this.max, true)}
        return true
    }

    _isNumber(number){if(this._isInt(number)){return true}else if(this._isFloat(number)){return true}}
    
    _isInt(n){return Number(n) === n && n % 1 === 0;}
    
    _isFloat(n){return Number(n) === n && n % 1 !== 0;}

    _randomRange(min, max){return Math.floor(Math.random()*(max-min+1)+min)}

    _log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}

