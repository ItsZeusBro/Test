import * as assert  from "node:assert";
import * as util from "node:util"

export class Types{
	constructor(){
		//This should expose all type functions from a general level
	}	
    assert(){
        
    }

	random(){

	}
	context(){
		return {

			'integer':{
				'min':undefined,
				'max':undefined,
			},
			'string':{
				'min':undefined,
				'max':undefined,
				'pattern':undefined //some regex pattern (we need that regex generator for this feature)
			},
	
			'null':{
				
			},

			'array':{
				'min':undefined,
				'max':undefined,
				'map':{
					//you can map an array to types or patterns
					'types':[],//whatever types or pattern here
					'n':undefined
				},
				'object':false,
				'string':false,
				'tree':false,
				'strata':false,
				'linkList':false
			},

			'object':{
				'min':undefined,
				'max':undefined,
				'map':{
					//you can map keys to types
					
				},
				'array':false,
				'string':false,
				'matrix':false,
				'strata':false,
				'linkList':false
			},

			'tree':{
				'min':undefined,
				'max':undefined,
				'depth':undefined,
				'payload':'payload',
				'map':{
					//pattern for each layer of the tree
					//if keys map not used, then normal payload schema will be used with
					//either defined payload key or default payload key
				},
				//these would all be in the payload section
				'array':false,
				'string':false,
				'matrix':false,
				'strata':false,
				'linkList':false
			}



		}
	}	

	compare(thing1, thing2, equal=[true]){
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

