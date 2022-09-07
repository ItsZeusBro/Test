import * as assert  from "node:assert";
import { DefaultMap } from "../Default/DefaultMap.js";
export class _Float{
    constructor(min, max){
        this.min=min; 
        this.max=max;
        this.context;
    }

    _context(float){return {'type':'float','data':float,'min':this.min,'max':this.max}}

    is(float){if(float){try{this.assert(float)}catch{return;} return true}}

    random(precision=100){
        var _min;
        var _max;
        if(this.min||this.compare(this.min, 0.0)){_min=this.min}else{_min=DefaultMap['float_min']}
        if(this.max){_max=this.max}else{_max=DefaultMap['float_max']}
        this.context = this._context(this._randomRange(_min, _max, precision))
        return this.context['data']
    }

    assert(float, min, max){
        assert.equal(this._isStat(float), true)
        if(min){assert.equal(float>=min, true)}
        else{assert.equal(float>=this.min, true)}
        if(max){assert.equal(float<=max, true)}
        else{assert.equal(float<=this.max, true)}
        return true
    }
    
    compare(stat1, stat2, operation, precision=10){
        if(operation=='gt'){ return this.greaterThan(stat1, stat2)}
        else if(operation=='lt'){return this.lessThan(stat1, stat2)}
        else if(operation=='gte'){
            if(stat1.toPrecision(precision)==stat2.toPrecision(precision)){return true}
            return this.greaterThan(stat1, stat2)
        }else if(operation=='lte'){
            if(stat1.toPrecision(precision)==stat2.toPrecision(precision)){return true}
            return this.lessThan(stat1, stat2)
        }else{
            return stat1.toPrecision(precision)==stat2.toPrecision(precision)
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
    
    _isStat(n){return Number(n) === n && n % 1 !== 0;}

    _randomRange(min, max, precision){
        const str = (Math.random() * (max - min) + min).toFixed(precision);
        return parseFloat(str);
    }

    _log(float){if(float){console.log(util.inspect(float, false, null, true))}}
}

