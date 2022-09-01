import * as assert  from "node:assert";
import { _Object } from "../Object/Object.js";
export class _Tree{
    constructor(min_width, max_width, min_depth, max_depth, map){
        this.min_width=min_width
        this.max_width=max_width
        this.min_depth=min_depth
        this.max_depth=max_depth
        this.map=map
    }
    context(tree){
        return {
            'type':'tree',
            'tree':tree,
            'min_width':this.min_width,
            'max_width':this.max_width,
            'min_depth':this.min_depth,
            'max_depth':this.max_depth,
            'map':this.map
        }
    }

    is(tree){if(this.depth(tree)){return this.context(tree)}}

    depth(tree, d=[0]){
        if(new _Object().is(tree)&&d[0]){
            this.apply(Object.keys(tree))
            for(var i = 0; i<new _Object().width(tree); i++){
                var key = Object.keys(tree)[i];
                d[0]+=1
                this.depth(tree[key], d)
            }

        }else if(new _Object().is(tree)){
            for(var i = 0; i<new _Object().width(tree); i++){
                var key = Object.keys(tree)[i];
                this.depth(tree[key], d)
            }

        }else{
            return d[0]
        }
    }

    apply(tree){
        //apply the map if it exists
        if(new _Object().is(this.map)){
            for (var i = 0; i<Object.keys(this.map); i++){
                this.map[i] //a map is a key type association
            }
        }
    }
    

    exists(){return true}
    
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
   
}