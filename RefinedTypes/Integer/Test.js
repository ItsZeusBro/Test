import { _Integer } from "./Integer.js";
import * as assert from "node:assert"

export class IntegerTest{
    constructor(){
        this.tests(1000)
    }
    tests(n){
        var lib = new _Integer()
        var integer = new _Integer(1, 5000)
        for(var i = 0; i<n; i++){
            var testVal = integer.randomRange(1, 5000)
            console.log('asserting', testVal, 'is in range')
            assert.equal(integer.is(testVal)['type'], 'integer')
        }

        for(var i = 0; i<n; i++){
            var testVal = integer.randomRange(5001, 10000)
            console.log('asserting', testVal, 'is not in range')
            assert.equal(integer.is(testVal), undefined)
        }
    }
}
