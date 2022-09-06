import * as assert  from "node:assert";
import { _Integer } from "../Integer/Integer.js";
import * as util from "node:util"

export class _Matrix{
    constructor(min_width, max_width, min_depth, max_depth, map){
        this.min_width = min_width
        this.max_width = max_width
        this.min_depth = min_depth
        this.max_depth = max_depth
        this.context;
    }

    _context(matrix){
        return {
            'type': 'matrix',
            'data': matrix,
            'depth': this.depth(matrix),
            'min_width': this.min_width,
            'max_width': this.max_width,
            'min_depth': this.min_depth,
            'max_depth': this.max_depth,
            'map':{
                //matricies can have arbitrary payload [whatever, [[],[whatever else, []]],[]]
            }
        }
    }
    assert(matrix){
        assert.equal(this.depth(matrix)<=this.max_depth, true)
        assert.equal(this.depth(matrix)>=this.min_depth, true)
        assert.equal(this._max_width(matrix)<=this.max_width, true)
        assert.equal(this._min_width(matrix)>=this.min_width, true)
    }
    is(matrix){
        try{this.assert}catch{return false}
        return true
    }
    _min_width(matrix, w=[Infinity]){
        if(matrix.length<=w[0]){w[0]=matrix.length}
        for(var i = 0; i<matrix.length; i++){
            this._min_width(matrix[i], w)
        }
        return w[0]
    }
    _max_width(matrix, w=[0]){
        if(matrix.length>=w[0]){w[0]=matrix.length}
        for(var i = 0; i<matrix.length; i++){
            this._max_width(matrix[i], w)
        }
        return w[0]
    }

    depth(matrix, n=0, d=[0]){
        if(Array.isArray(matrix)){
            for(var i = 0; i<matrix.length; i++){
                if(n>=d[0]){
                    d[0]=n
                }
                this.depth(matrix[i], n+1, d)
            }
        }
        return d[0]
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
                //TODO: import Refined Types and choose a random payload
                matrix.push(new _Integer(0, 100).random()['data'])
            }
        }
        this.context = this._context(matrix)
        return this.context['data']
    }
    

    log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}

