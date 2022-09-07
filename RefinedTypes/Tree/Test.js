import { _Tree } from "./Tree.js";
import * as assert  from "node:assert";
import { _Integer } from "../Integer/Integer.js";
import { DefaultMap } from "../Default/DefaultMap.js";

export class _TreeTest{
    constructor(n){
        for(var i=0; i<n; i++){
            var tree = new _Tree()
            var _tree = tree.random()
            console.log(_tree)
            assert.equal(tree._min_width(_tree) >= DefaultMap['tree_min_width'], true)
            assert.equal(tree._max_width(_tree) <= DefaultMap['tree_max_width'], true)
            tree.assert(_tree)
            assert.equal(tree.is(_tree), true)
            assert.equal(typeof tree.context === 'object', true)
            assert.equal(tree.context['depth'], new _Tree().depth(_tree))
            assert.equal(tree.context['min_width'], tree.min_width)
            assert.equal(tree.context['max_width'], tree.max_width)
            assert.equal(tree.context['min_depth'], tree.min_depth)
            assert.equal(tree.context['max_depth'], tree.max_depth)
        }
    }
}