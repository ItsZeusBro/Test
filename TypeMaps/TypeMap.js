import * as assert  from "node:assert";
import * as util from "node:util"
import { _Integer } from "./Integer/Integer.js";
import { _String } from "./String/String.js";
import { _Null } from "./Null/Null.js";
import { _Array } from "./Array/Array.js";
import { _LinkList } from "./LinkList/LinkList.js";
import { _Matrix } from "./Matrix/Matrix.js";
import { _Object } from "./Object/Object.js";
import { _Random } from "./Random/Random.js";
import { _Strata } from "./Strata/Strata.js";
import { _Tree } from "./Trees/Tree.js";
import { _CharSet } from "./CharSet/CharSet.js";

export class TypeMap{
	constructor(rawTypeMap){

        this.rawTypeMap=rawTypeMap
    }

    //what kind of functions does a typemap need?
    random(){
        //generates random data with real values
        //corresponding to the type map
    }
    //These assertions are for broad general type tests and range tests 
    assert(){
        //asserts the validity of data according to a typemap
    }

    compare(){
        //compares type maps by type
    }

    diff(){
        //takes the difference between type maps
    }

	log(){
        if(this.rawTypeMap){
            console.log(util.inspect(this.rawTypeMap, false, null, true))
        }
    }
}

var typemap = new TypeMap({
    'integer': new _Integer(0, 5000),
    // 'string': new _String(0, 20, new _CharSet()),
    // 'array': new _Array(0, 10, {'typs':[new _Integer(0, 5000), new _String(0, 10)]}),
    // 'object': new _Object(0, 5, {'key1':new _Integer(0, 10), 'key2':new _String(0, 5)}),
    
    // 'strata': new _Strata(),
    // 'random': new _Random(),
    // 'tree': new _Tree(),
    // 'matrix': new _Matrix(),
    // 'linkList': new _LinkList(),
    // 'null': new _Null(),
    // 'charSet':new _CharSet(),
})