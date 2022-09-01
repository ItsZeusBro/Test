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

export class TypeMap{
	constructor(rawTypeMap){
        //a type map is a recursive type
        //at each level in the map, there can only be 
        //single instances of the primitive types //'object', 'string', etc
        //to avoid collisions. It represents a testing/runtime context for modules, functions, etc...
        //each primitive type has its own restraints that are used to generate random types
        //and to make assertions before consumption and during testing
        
    }	



	log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }

}

