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
            string.random()
            console.log('asserting', string.context, 'is in range')
            assert.equal(string.context['type'], 'string')
            assert.equal(typeof string.context['data'], 'string')
            assert.equal(string.context['data'].length<=10, true)
            assert.equal(string.context['data'].length>=1, true)
        }
    }
}