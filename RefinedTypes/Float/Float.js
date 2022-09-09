import * as assert  from "node:assert";
import { DefaultMap } from "../Default/DefaultMap.js";
export class _Float{
    constructor(min, max){
        this.min;
        this.max;
        if(min||min==0){this.min=min;}else{this.min=DefaultMap['float_min']}
        if(max||max==0){this.max=max;}else{this.max=DefaultMap['float_max']}
        this.context;
    }

    _context(float){return {'type':'float','refType':this,'data':float,'min':this.min,'max':this.max}}

    is(float){if(float){try{this.assert(float)}catch{return;} return this._context(float)}}

    random(precision=100){
        var _min; var _max;
        if(this.min||this.compare(this.min, 0.0)){_min=this.min}
        if(this.max){_max=this.max}
        this.context = this._context(this._randomRange(_min, _max, precision))
        return this.context['data']
    }

    assert(float){
        assert.equal(this._isFloat(float), true)
        assert.equal(float>=this.min, true)
        assert.equal(float<=this.max, true)
        return true
    }
    
    compare(float1, float2, operation, precision=10){
        if(operation=='gt'){ return this.greaterThan(float1, float2)}
        else if(operation=='lt'){return this.lessThan(float1, float2)}
        else if(operation=='gte'){
            if(float1.toPrecision(precision)==float2.toPrecision(precision)){return true}
            return this.greaterThan(float1, float2)
        }else if(operation=='lte'){
            if(float1.toPrecision(precision)==float2.toPrecision(precision)){return true}
            return this.lessThan(float1, float2)
        }else{
            return float1.toPrecision(precision)==float2.toPrecision(precision)
        }
    }

    lessThan(A, B) {
        var Epsilon = DefaultMap['float_epsilon']; 
        return (A - B < Epsilon) && (Math.abs(A - B) > Epsilon);
    };
    
    greaterThan(A, B) {
        var Epsilon = DefaultMap['float_epsilon'];
        return (A - B > Epsilon) && (Math.abs(A - B) > Epsilon);
    };
    
    _isFloat(n){return Number(n) === n && n % 1 !== 0;}

    _randomRange(min, max, precision){
        const str = (Math.random() * (max - min) + min).toFixed(precision);
        return parseFloat(str);
    }

    _log(float){if(float){console.log(util.inspect(float, false, null, true))}}
}

