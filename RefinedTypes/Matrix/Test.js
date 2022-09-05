import { _Matrix } from "./Matrix.js";
export class _MatrixTest{
    constructor(n){
        var min_width = 2
        var max_width=5 
        var min_depth=5 
        var max_depth=7

        for(var i=0; i<n; i++){
            var matrix = new _Matrix(min_width, max_width, min_depth, max_depth).random()
            console.log(matrix)
            new _Matrix(min_width, max_width, min_depth, max_depth).assert(matrix['data'])
        }
    }
}
new _MatrixTest(1000)