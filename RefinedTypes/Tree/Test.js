import { _Tree } from "./Tree.js";

export class _TreeTest{
    constructor(n){
        var min_width=2
        var max_width=2 
        var min_depth=2
        var max_depth=2

        for(var i=0; i<n; i++){
            var tree = new _Tree(min_width, max_width, min_depth, max_depth).random()
            console.log(tree)
            console.log(new _Tree().depth(tree['data']))
            // console.log(tree)
            new _Tree(min_width, max_width, min_depth, max_depth).assert(tree['data'])
            tree=new _Tree(min_width, max_width, min_depth, max_depth).is(tree['data'])
            assert.equal(typeof tree ==='object', true)
            assert.equal(tree['depth'], new _Matrix().depth(tree['data']))
            assert.equal(tree['min_width'], min_width)
            assert.equal(tree['max_width'], max_width)
            assert.equal(tree['min_depth'], min_depth)
            assert.equal(tree['max_depth'], max_depth)
        }
    }
}
new _TreeTest(1000)