import * as assert  from "node:assert";

export class _Integer{
    constructor(min, max){
        this.min=min; 
        this.max=max;
        this.context;
    }

    _context(integer){return {'type':'integer','data':integer,'min':this.min,'max':this.max}}

    is(integer){if(integer){try{this.assert(integer)}catch{return;}return true;}}

    random(min, max){
        var _min; var _max;
        if(min){_min=min}else if(this.min || this.min==0){_min=this.min}else{_min=-10000}
        if(max){_max=max}else if(this.max){_max=this.max}else{_max=10000}
        this.context = this._context(this._randomRange(_min, _max))
        return this.context['data']
    }

    assert(integer, min, max){
        assert.equal(this._isInteger(integer), true)

        if(min){assert.equal(integer>=min, true)}
        else{assert.equal(integer>=this.min, true)}

        if(max){assert.equal(integer<=max, true)}
        else{assert.equal(integer<=this.max, true)}

        return true
    }

    compare(){
        //compares data by type map (shallow comparison)
        //or compares data deeply for which a type map is not needed
    }
    
    _isInteger(integer){return Number(integer) === integer && integer % 1 === 0;}
    

    _randomRange(min, max){return Math.floor(Math.random()*(max-min+1)+min)}

    _log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}

