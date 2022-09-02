import { _Array } from "./Array.js"
import { _Integer } from "../Integer/Integer.js"
import { _String } from "../String/String.js"
import * as assert from "node:assert"

export class ArrayTest{

    constructor(){
        this.tests(1000)
    }
    tests(n){
        var array = new _Array(1, 10, {'types':[new _Integer(0, 50), new _String(1, 20)]})
        for(var i = 0; i<n; i++){
            var testVal = array.randomArray()
            console.log('asserting', testVal, 'is of qualified types in _Array')
            //assert.equal(array.is(testVal)['type'], 'array')
        }

        for(var i = 0; i<n; i++){
            var testVal = array.randomArray()
            console.log('asserting', testVal, 'is not of qualified types in _Array')
            //assert.equal(array.is(testVal), undefined)
        }

    }
}