import { _String } from "./String.js"
import * as assert from "node:assert"

export class _StringTest{
    constructor(n){
        this.charSet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        this.tests(n)
    }
    tests(n){
        var string = new _String(1, 10, this.charSet)
        for(var i = 0; i<n; i++){
            var testVal = string.randomString(1, 10)
            console.log('asserting', testVal, 'is in range')
            assert.equal(string.is(testVal)['type'], 'string')
        }

        for(var i = 0; i<n; i++){
            var testVal = string.randomString(11, 20)
            console.log('asserting', testVal, 'is not in range')
            assert.equal(string.is(testVal), undefined)
        }
    }
}