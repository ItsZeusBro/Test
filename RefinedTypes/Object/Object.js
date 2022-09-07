import * as assert  from "node:assert";
import { _Integer } from "../Integer/Integer.js";
import { RefinedTypes } from "../RefinedTypes.js";
import * as util from "node:util"

export class _Object{
    constructor(min_width, max_width, map){
        this.min_width = min_width
        this.max_width = max_width
        this.context;
    }

    _context(object){
        return {
            'type': 'object',
            'data': object,
            'size': object.length,
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

    random(width=new _Integer(this.min_width, this.max_width).random()){
        //we want to load the matrix with sub-matricies so long as depth > 0
        //if depth == 0 we want to fill it with some data
        var object={}
        for(var i = 0; i<width; i++){
            //TODO: import Refined Types and choose a random payload
            object.push(new RefinedTypes().random(['object']))
        }
        this.context = this._context(object)
        return this.context['data']
    }

    compare(){
        //compares data by type map (shallow comparison)
        //or compares data deeply for which a type map is not needed
    }

    log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}

