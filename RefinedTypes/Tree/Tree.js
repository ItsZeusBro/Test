import * as assert  from "node:assert";
import { _String } from "../String/String.js";
import { _Integer } from "../Integer/Integer.js";
import * as util from "node:util"

export class _Tree{
    constructor(min_width, max_width, min_depth, max_depth, map){
        this.min_width=min_width
        this.max_width=max_width
        this.min_depth=min_depth
        this.max_depth=max_depth
        this.map=map
        this.context;
    }
    _context(tree){
        return {
            'type':'tree',
            'data':tree,
            'depth': this.depth(tree),
            'min_width':this.min_width,
            'max_width':this.max_width,
            'min_depth':this.min_depth,
            'max_depth':this.max_depth,
            'map':this.map
        }
    }

    is(tree){try{this.assert(tree)}catch{return}; return true}

    assert(tree){
        assert.equal(this.depth(tree)<=this.max_depth, true)
        assert.equal(this.depth(tree)>=this.min_depth, true)
        assert.equal(this._max_width(tree)<=this.max_width, true)
        assert.equal(this._min_width(tree)>=this.min_width, true)
    }

    _min_width(tree, w=[Infinity]){
        if(Object.keys(tree).length<=w[0]){w[0]=Object.keys(tree).length}
        for(var i = 0; i<Object.keys(tree).length; i++){
            var key = Object.keys(tree)[i]
            this._min_width(tree[key], w)
        }
        return w[0]
    }

    _max_width(tree, w=[0]){
        if(Object.keys(tree).length>=w[0]){w[0]=Object.keys(tree).length}
        for(var i = 0; i<Object.keys(tree).length; i++){
            var key = Object.keys(tree)[i]
            this._max_width(tree[key], w)
        }
        return w[0]
    }

    depth(tree, n=0, d=[0]){
        if(tree instanceof Object){
            for(var i = 0; i<Object.keys(tree).length; i++){
                if(n>=d[0]){
                    d[0]=n
                }
                var key = Object.keys(tree)[i]
                this.depth(tree[key], n+1, d)
            }
        }
        return d[0]
    }

    random(tree={},depth=new _Integer(this.min_depth, this.max_depth).random()['data'], width=new _Integer(this.min_width, this.max_width).random()['data']){
        //we want to load the matrix with sub-matricies so long as depth > 0
        //if depth == 0 we want to fill it with some data
        if(depth>=1){
            for(var i = 0; i<width; i++){
                var key = new _String(5, 20).random()['data']
                tree[key]={}
                this.random(tree[key], depth-1, width)
            }
        }else{
            for(var i = 0; i<width; i++){
                var key = new _String(5, 20).random()['data']
                tree[key]=new _Integer(0, 100).random()['data']
            }
        }
        this.context = this._context(tree)
        return this.context['data']
    }

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
   
}