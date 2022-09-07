import { _Stat } from "./Stat.js";
import * as assert from "node:assert"

export class _StatTest{
    constructor(n){this.tests(n)}
    tests(n){
        for(var i = 0.00000; i<n; i+=0.00001){
            var random = new _Stat(i, n).random()
            console.log(i, n,new _Stat(i, n).is(random))
            console.log('assertion should not fail', new _Stat(i, n).assert(random))
        }
    }
}
