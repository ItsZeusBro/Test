import { _Object } from "./Object.js";
import * as assert  from "node:assert";

export class _ObjectTest{

    constructor(n){
        for(var i=0; i<n; i++){
            var object = new _Object()
            console.log(object.random())
            console.log(object.context)
            assert.equal(object.context['type'], 'object')
            assert.equal(typeof object.context['data'], 'object')
            assert.equal(object.context['size']<=object.max_width, true)
            assert.equal(object.context['size']>=object.min_width, true)
            assert.equal(object.context['min_width'], object.min_width)
            assert.equal(object.context['max_width'], object.max_width)
        }
    }
}
new _ObjectTest(1000)
