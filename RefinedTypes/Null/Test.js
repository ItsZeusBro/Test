import { _Null } from "./Null.js"
import { _String } from "../String/String.js"
import * as assert from "node:assert"

export class NullTest{
    constructor(){
        this.tests(1000)
    }
    tests(n){
        
        var _null = new _Null([null, NaN, false, 0, '0', 'null', 'undefined'])
        for(var i = 0; i<n; i++){
            var testVal = _null.randomNull()
            console.log('asserting', testVal, 'is a member of the set')
            assert.equal(_null.is(testVal)['type'], 'null')
        }

        for(var i = 0; i<n; i++){
            var testVal = new _String().randomString(5, 10)
            console.log('asserting', testVal, 'is not in set')
            assert.equal(_null.is(testVal), undefined)
        }
    }
}