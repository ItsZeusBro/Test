import * as assert  from "node:assert";

export class _Float{
    constructor(min, max){this.min=min; this.max=max}

    context(float){return {'type':'float','data':float,'min':this.min,'max':this.max}}

    is(float){if(float){try{this.assert(float)}catch{return;} return this.context(float)}}

    random(min, max, precision=100){
        var _min; var _max;
        if(min){_min=min}else if(this.min || this.compare(this.min, 0.0)){_min=this.min}else{_min=0.0000000001}
        if(max){_max=max}else if(this.max){_max=this.max}else{_max=1.0000000000}
        return this.context(this._randomRange(_min, _max, precision))
    }

    assert(float, min, max){
        if(float){assert.equal(this._isFloat(float), true)}
        if(min){assert.equal(float>=min, true)}
        else if(this.min){assert.equal(float>=this.min, true)}
        if(max){assert.equal(float<=max, true)}
        else if(this.max){assert.equal(float<=this.max, true)}
        return true
    }
    compare(float1, float2, operation, precision=10){
        if(operation=='gt'){
            return this.greaterThan(float1, float2)
        }else if(operation=='lt'){
            return this.lessThan(float1, float2)
        }else if(operation=='gte'){
            if(float1.toPrecision(precision)==float2.toPrecision(precision)){return true}
            return this.greaterThan(float1, float2)
        }else if(operation=='lte'){
            if(float1.toPrecision(precision)==float2.toPrecision(precision)){return true}
            return this.lessThan(float1, float2)
        }else{
            return float1.toPrecision(precision)==float2.toPrecision(precision)
        }
    }

    lessThan(A, B) {var Epsilon = 0.0000000001;return (A - B < Epsilon) && (Math.abs(A - B) > Epsilon);};
    greaterThan(A, B) {var Epsilon = 0.0000000001;return (A - B > Epsilon) && (Math.abs(A - B) > Epsilon);};
    
    _isFloat(n){return Number(n) === n && n % 1 !== 0;}

    _randomRange(min, max, precision){
        const str = (Math.random() * (max - min) + min).toFixed(precision);
        return parseFloat(str);
    }

    _log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}

