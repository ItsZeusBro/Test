import { _Array } from "./Array.js";
import * as assert  from "node:assert";

export class _ArrayTest{

    constructor(n){
        for(var i=0; i<n; i++){
            var array = new _Array()
            console.log(array.random())
            console.log(array.context)
            assert.equal(array.context['type'], 'array')
            assert.equal(Array.isArray(array.context['data']), true)
            assert.equal(array.context['size']<=array.max_width, true)
            assert.equal(array.context['size']>=array.min_width, true)
            assert.equal(array.context['min_width'], array.min_width)
            assert.equal(array.context['max_width'], array.max_width)
        }
    }
}
new _ArrayTest(1000)
