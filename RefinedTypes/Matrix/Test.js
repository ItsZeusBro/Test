import { _Matrix } from "./Matrix.js";
import * as assert  from "node:assert";

export class _MatrixTest{
    constructor(n){
        var min_width = 2
        var max_width=5 
        var min_depth=5 
        var max_depth=7

        for(var i=0; i<n; i++){
            var matrix = new _Matrix(min_width, max_width, min_depth, max_depth).random()
            console.log(matrix)
            new _Matrix(min_width, max_width, min_depth, max_depth).assert(matrix)
            context=new _Matrix(min_width, max_width, min_depth, max_depth).is(matrix)
            assert.equal(typeof matrix ==='object', true)
            assert.equal(matrix['depth'], new _Matrix().depth(matrix['data']))
            assert.equal(matrix['min_width'], min_width)
            assert.equal(matrix['max_width'], max_width)
            assert.equal(matrix['min_depth'], min_depth)
            assert.equal(matrix['max_depth'], max_depth)
        }
    }
}
new _MatrixTest(1000)