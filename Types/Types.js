import * as assert  from "node:assert";
import * as util from "node:util"

export class Types{
	constructor(){
		//This should expose all type functions from a general level
	}	
	array(context){
		
	}
	integer(context){

	}
	string(context){

	}
	object(context){

	}
	linkedList(context){

	}
	tree(context){

	}
	matrix(context){

	}
	null(context){

	}
	strata(context){

	}

	isEqual(thing1, thing2, equal=[true]){
		if(!equal[0]){
			return false
		}else{
			if(this.types.isNullType(thing1)&&this.types.isNullType(thing2)){
				return this._isEqualNullType(thing1, thing2, equal)
			}
			else if(this.types.isInteger(thing1) && this.types.isInteger(thing2)){
				return this._isEqualNumber(thing1, thing2, equal)

			}else if(this.types.isString(thing1)&&this.types.isString(thing2)){
				return this._isEqualString(thing1, thing2, equal)

			}else if(this.types.isObject(thing1)&&this.types.isObject(thing2)){
				return this._isEqualObject(thing1, thing2, equal)

			}else if(this.types.isArray(thing1) && this.types.isArray(thing2)){
				return this._isEqualArray(thing1, thing2, equal)

			}else if(this.types.isStrata(thing1)&&this.types.isStrata(thing2)){
				return this._isEqualStrata(thing1, thing2, equal)

			}else if(!thing1 && !thing2){
				return false
			}else{
				equal[0]=false
				return false
			}
		}
	}

	log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }

}

