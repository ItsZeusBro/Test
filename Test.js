import { assert } from "node:console";
import * as util from "node:util"
import { Comparators } from "./Comparators/Comparators.js";
import { Random } from "./Random/Random.js";
import { Validation } from "./Validation/Validation.js";

export class Test{
	constructor(){
		Test.prototype.Comparators = new Comparators()
		Test.prototype.Random = new Random()
		Test.prototype.Validation = new Validation()
	}

	log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}

//var test=new Test()
//console.log(test.Comparators.isEqualObj({}, {}))
//test.log(test.recursiveStrata(5, 5, ['payload'], []))