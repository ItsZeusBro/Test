import { _Integer } from "./Integer.js";
import * as assert from "node:assert"

export class _IntegerTest{
    constructor(n){this.tests(n)}
    tests(n){
        for(var i = 0; i<n; i++){console.log(new _Integer(i, n).is(new _Integer(i, n).random()))}
    }
}
