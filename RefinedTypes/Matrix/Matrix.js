import * as assert  from "node:assert";
import { _Integer } from "../Integer/Integer.js";
import * as util from "node:util"

export class _Matrix{
    constructor(min_width, max_width, min_depth, max_depth, map){
        this.min_width = min_width
        this.max_width = max_width
        this.min_depth = min_depth
        this.max_depth = max_depth
    }

    context(matrix){
        return {
            'type': 'matrix',
            'matrix': matrix,
            'depth': this.getDepth(matrix),
            'min_width': this.min_width,
            'max_width': this.max_width,
            'min_depth': this.min_depth,
            'max_depth': this.max_depth,
            'map':{
                //matricies can have arbitrary payload [whatever, [[],[whatever else, []]],[]]
            }
        }
    }

    is(matrix){

    }

    random(matrix=[],depth=new _Integer(this.min_depth, this.max_depth).random()['data'], width=new _Integer(this.min_width, this.max_width).random()['data']){
        //we want to load the matrix with sub-matricies so long as depth > 0
        //if depth == 0 we want to fill it with some data
        if(depth){
            for(var i = 0; i<width; i++){
                matrix.push([])
                this.random(matrix[i], depth-1, width)
            }
        }else{
            for(var i = 0; i<width; i++){
                matrix.push(new _Integer(0, 100).random()['data'])
            }
        }
        return matrix
    }
    

    log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}

new _Matrix().log(new _Matrix(2, 5, 5, 7).random())