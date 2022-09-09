import * as assert  from "node:assert";
import { DefaultMap } from "../Default/DefaultMap.js";
export class _Stat{
    constructor(min, max){
        this.min;
        this.max;
        if(min||min==0){this.min=min;}else{this.min=DefaultMap['stat_min']}
        if(max||max==0){this.max=max;}else{this.max=DefaultMap['stat_max']}

        this.context;
    }

    _context(stat){return {'type':'stat', 'refType':this, 'data':stat,'min':this.min,'max':this.max}}

    is(stat){if(stat){try{this.assert(stat)}catch{return;} return this._context(stat)}}

    random(precision=100){
        var _min; var _max;
        if(this.min || this.compare(this.min, 0.0)){_min=this.min}
        if(this.max){_max=this.max}
        this.context = this._context(this._randomRange(_min, _max, precision))
        return this.context['data']
    }

    assert(stat, min, max){
        assert.equal(this._isStat(stat), true)
        if(min){assert.equal(stat>=min, true)}
        else{assert.equal(stat>=this.min, true)}
        if(max){assert.equal(stat<=max, true)}
        else{assert.equal(stat<=this.max, true)}
        return true
    }
    
    compare(stat1, stat2, operation, precision=10){
        if(operation=='gt'){return this.greaterThan(stat1, stat2)}
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
        var Epsilon = DefaultMap['stat_epsilon']; 
        return (A - B < Epsilon) && (Math.abs(A - B) > Epsilon);
    };

    greaterThan(A, B) {
        var Epsilon = DefaultMap['stat_epsilon'];
        return (A - B > Epsilon) && (Math.abs(A - B) > Epsilon);
    };
    
    _isStat(n){return Number(n) === n && n % 1 !== 0;}

    _randomRange(min, max, precision){
        const str = (Math.random() * (max - min) + min).toFixed(precision);
        return parseFloat(str);
    }

    _log(stat){if(stat){console.log(util.inspect(stat, false, null, true))}}
}

