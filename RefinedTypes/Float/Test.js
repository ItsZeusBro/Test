import { _Float } from "./Float.js";
import * as assert from "node:assert"

export class _FloatTest{
    constructor(n){this.tests(n)}
    tests(n){
        for(var i = 0.00000; i<n; i+=0.00001){console.log(new _Float(i, n).is(new _Float(i, n).random()['data']))}
    }
}
new _FloatTest(1)