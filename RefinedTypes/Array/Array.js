import * as assert  from "node:assert";
import { _Integer } from "../Integer/Integer.js";
import { RefinedTypes } from "../RefinedTypes.js";
import * as util from "node:util"

export class _Array{
    constructor(min_width, max_width, map){
        this.min_width = min_width
        this.max_width = max_width
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

    random(width=new _Integer(this.min_width, this.max_width).random()){
        //we want to load the matrix with sub-matricies so long as depth > 0
        //if depth == 0 we want to fill it with some data
        var array=[]
        for(var i = 0; i<width; i++){
            //TODO: import Refined Types and choose a random payload
            array.push(new RefinedTypes().random(['array']))
        }
        this.context = this._context(array)
        return this.context['data']
    }

    compare(){
        //compares data by type map (shallow comparison)
        //or compares data deeply for which a type map is not needed
    }

    log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}

