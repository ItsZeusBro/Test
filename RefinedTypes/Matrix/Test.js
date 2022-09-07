import { _Matrix } from "./Matrix.js";
import * as assert  from "node:assert";
import { DefaultMap } from "../Default/DefaultMap.js";
export class _MatrixTest{
    constructor(n){


        for(var i=0; i<n; i++){
            var matrix = new _Matrix()
            var mtx = matrix.random()
            console.log(mtx)
            assert.equal(matrix._min_width(mtx) >= DefaultMap['matrix_min_width'], true)
            assert.equal(matrix._max_width(mtx) <= DefaultMap['matrix_max_width'], true)
            matrix.assert(mtx)
            assert.equal(matrix.is(mtx), true)
            assert.equal(typeof matrix.context ==='object', true)
            assert.equal(matrix.context['depth'], new _Matrix().depth(mtx))
            assert.equal(matrix['min_width'], matrix.min_width)
            assert.equal(matrix['max_width'], matrix.max_width)
            assert.equal(matrix['min_depth'], matrix.min_depth)
            assert.equal(matrix['max_depth'], matrix.max_depth)
        }
    }
}
// new _MatrixTest(1000)
