import { _Tree } from "./Tree.js";
import * as assert  from "node:assert";
import { _Integer } from "../Integer/Integer.js";

export class _TreeTest{
    constructor(n){
        var min_width=2
        var max_width=2 
        var min_depth=2
        var max_depth=2

        for(var i=0; i<n; i++){
            var _tree = new _Tree(min_width, max_width, min_depth, max_depth)
            var tree = _tree.random()
            console.log(tree)
            assert.equal(_tree._min_width(tree), 2)
            assert.equal(_tree._max_width(tree), 2)
            assert.equal(new _Tree().depth(tree), 2)
            _tree.assert(tree)
            assert.equal(typeof tree ==='object', true)
            assert.equal(_tree.context['min_width'], min_width)
            assert.equal(_tree.context['max_width'], max_width)
            assert.equal(_tree.context['min_depth'], min_depth)
            assert.equal(_tree.context['max_depth'], max_depth)
        }
    }
}