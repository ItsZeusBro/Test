import { _Number } from "./Number.js";
import * as assert from "node:assert"

export class _NumberTest{
    constructor(n){this.tests(n)}
    tests(n){
        for(var i = 0; i<n; i++){console.log(new _Number(i, n).is(new _Number(i, n).random()['data']))}
    }
}
new _NumberTest(10000)