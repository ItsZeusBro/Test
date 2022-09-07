import { _Object } from "./Object.js";
import * as assert  from "node:assert";

export class _ObjectTest{

    constructor(n){

        var min_width=1
        var max_width=10

        for(var i=0; i<n; i++){
            var object = new _Object(1, 10)
            console.log(object.random())
            console.log(object.context)
            assert.equal(object.context['type'], 'object')
            assert.equal(typeof object.context['data'], 'object')
            assert.equal(object.context['size']<=max_width, true)
            assert.equal(object.context['size']>=min_width, true)
            assert.equal(object.context['min_width'], min_width)
            assert.equal(object.context['max_width'], max_width)
        }
    }
}
new _ObjectTest(1000)
