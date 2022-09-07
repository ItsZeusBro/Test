import * as assert  from "node:assert";
import { _Integer } from "../Integer/Integer.js";
import { _Tree } from "../Tree/Tree.js";
import { RefinedTypes } from "../RefinedTypes.js";
import * as util from "node:util"

export class _Object{
    constructor(min_width, max_width, map){
        this.min_width = min_width
        this.max_width = max_width
        this.object = new _Tree(min_width, max_width, 1, 1, map)
        this.context;
    }

    _context(object){
        return {
            'type': 'object',
            'data': object,
            'size': Object.keys(object).length,
            'min_width': this.min_width,
            'max_width': this.max_width,
            'map':{
                //matricies can have arbitrary payload [whatever, [[],[whatever else, []]],[]]
            }
        }
    }

    assert(object){
        assert.equal(object.length>=this.min_width, true)
        assert.equal(object.length<=this.max_width, true)
    }

    is(object){
        try{this.assert(object)}catch{return false}
        return true
    }

    random(){
        this.context = this._context(this.object.random())
        return this.context['data']
    }

    compare(){
        //compares data by type map (shallow comparison)
        //or compares data deeply for which a type map is not needed
    }

    log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}


