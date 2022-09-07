import * as assert  from "node:assert";
import { _Integer } from "../Integer/Integer.js";
import { _Matrix } from "../Matrix/Matrix.js";
import * as util from "node:util"

export class _Array{
    constructor(min_width, max_width, map){
        this.min_width = min_width
        this.max_width = max_width
        this.array = new _Matrix(min_width, max_width, 0, 0, map)
        this.context;
    }

    _context(array){
        return {
            'type': 'array',
            'data': array,
            'size': array.length,
            'min_width': this.min_width,
            'max_width': this.max_width,
            'map':{
                //matricies can have arbitrary payload [whatever, [[],[whatever else, []]],[]]
            }
        }
    }

    assert(array){
        assert.equal(array.length>=this.min_width, true)
        assert.equal(array.length<=this.max_width, true)
    }

    is(array){
        try{this.assert(array)}catch{return false}
        return true
    }

    random(){
        this.context = this._context(this.array.random())
        return this.context['data']
    }

    compare(){
        //compares data by type map (shallow comparison)
        //or compares data deeply for which a type map is not needed
    }

    log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}

