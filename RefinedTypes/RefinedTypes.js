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
import { _Tree } from "./Tree/Tree.js";
import { _CharSet } from "./CharSet/CharSet.js";

export class RefinedTypes{
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
    

    is(thing){
        return this.rawTypeMap[this.getRawTypeOf(thing)].is(thing)
    }

    getRawTypeOf(thing){
		//returns type of a thing, if its supported by Types, even if its not instantiated
        if(new _Null().is(thing)){return 'null'}
        else if(new _String().is(thing)){return 'string'}
        else if(new _Integer().is(thing)){return 'integer'}
        else if(new _Array().is(thing)){return 'array'}
        else if(new _Object().is(thing)){return 'object'}
        else if(new _Matrix().is(thing)){return 'matrix'}
        else if(new _Tree().is(thing)){return 'tree'}
        else if(new _Strata().is(thing)){return 'strata'}
        else if(new _LinkList().is(thing)){return 'linkList'}
        else{return}
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