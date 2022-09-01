import * as assert  from "node:assert";
import { _Tree } from "../Trees/Tree.js";
export class _LinkList{
    constructor(
        min=1, 
        max=2, 
        map
    ){
        this.min = min
        this.max = max
        this.map = map //this should be a typeMap
    }

    exists(){return true}

    context(llist){
        return {
            'type': 'linkList',
            'linkList': llist,
            'size': new _Tree(2, 2, this.map).depth(llist),
            'min': this.min,
            'max': this.max,
            'map': this.map
        }
    }

    is(llist){if(new _Tree(2, 2, this.map).is(llist)){return this.context(llist)}}

    log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}

