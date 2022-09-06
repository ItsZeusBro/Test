import { _Matrix } from "./Matrix.js";
import * as assert  from "node:assert";

export class _MatrixTest{
    constructor(n){
        var min_width=2
        var max_width=5 
        var min_depth=5 
        var max_depth=7

        for(var i=0; i<n; i++){
            var matrix = new _Matrix(min_width, max_width, min_depth, max_depth)
            var mtx = matrix.random()
            console.log(mtx)
            matrix.assert(mtx)
            assert.equal(matrix.is(mtx), true)
            assert.equal(typeof matrix.context ==='object', true)
            assert.equal(matrix.context['depth'], new _Matrix().depth(mtx))
            assert.equal(matrix['min_width'], min_width)
            assert.equal(matrix['max_width'], max_width)
            assert.equal(matrix['min_depth'], min_depth)
            assert.equal(matrix['max_depth'], max_depth)
        }
    }
}
