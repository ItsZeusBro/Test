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
import { _Tree } from "./Trees/Trees.js";

export class RefinedTypes{
	constructor(descriptor){
		//This should expose all type functions from a general level
		this.integer=descriptor['integer']
		this.string=descriptor['string']
		this.null=descriptor['null']
		this.array=descriptor['array']
		console.log(this.array)
		this.object=descriptor['object']
		this.tree= descriptor['tree']
		this.matrix = descriptor['matrix']
		this.random = descriptor['random']
		this.linkList = descriptor['linkList']
		this.strata = descriptor['strata']
	}	
    assert(properties={}){
        //properties is interpreted differently depending on the type in properties
		//it is a general descriptor of the state of the thing, with keywords that 
		//reason about the type
		if(this.get(properties['type'])){
			this.get(properties['type']).assert(properties)
		}

    }

	random(type){
		//generates a random thing of specified type if properties present, otherwise default properties apply
		if(this.get(type)){this.get(type).random()}
	}

	context(){
		var context = {}
		if(this.has('integer')){context['integer']=this.integer.context()}
		if(this.has('string')){context['string']=this.string.context()}
		if(this.has('null')){context['null']=this.null.context()}
		if(this.has('array')){context['array']=this.array.context()}
		if(this.has('object')){context['object']=this.object.context()}
		if(this.has('tree')){context['tree']=this.tree.context()}
		if(this.has('matrix')){context['matrix']=this.matrix.context()}
		if(this.has('random')){context['random']=this.random.context()}
		if(this.has('linkList')){context['linkList']=this.linkList.context()}
		if(this.has('strata')){context['strata']=this.strata.context()}
		return context
	}	



	has(type){
		//if Types has the type instantiated return true
		if(this.get(type)){
			try{
				return this.get(type).exists()
			}catch{
				return false
			}
		}
	}

	getType(ofThing){
		if(ofThing=='integer'){return this.integer}
		else if(ofThing=='string'){return this.string}
		else if(ofThing=='null'){return this.null}
		else if(ofThing=='array'){return this.array}
		else if(ofThing=='object'){return this.object}
		else if(ofThing=='tree'){return this.tree}
		else if(ofThing=='matrix'){return this.matrix}
		else if(ofThing=='random'){return this.random}
		else if(ofThing=='linkList'){return this.linkList}
		else if(ofThing=='strata'){return this.strata}
	}

	compare(thing1, thing2, deep=false){
		if(thing && thing2 && !deep){
			//compare thing1 and thing2 for type equality
		}else if (thing1 && thing2 && deep){
			//compare thing1 and thing2 for deep equality
		}
	}

	in(thing, deep=false){
		if(thing && !deep){
			//if Types has a type that matches the type of thing return true
			
		}else if (thing && deep){
			//if Types has a type that is deeply equal to thing, return true

		}
	}

	typeOf(thing, refined=true){
		//returns type of a thing, if its supported by Types, even if its not instantiated
			if(new _Null().is(thing)){
				if(refined){
					try{
						return this.null.is(thing)
					}catch{
						return undefined
					}
				}else{
					return 'null'
				}
			}
			else if(new _String().is(thing)){
				if(refined){
					try{
						return this.string.is(thing)
					}catch{
						return undefined
					}
				}else{
					return 'string'
				}
			}
			else if(new _Integer().is(thing)){
				if(refined){
					try{
						return this.integer.is(thing)
					}catch{
						return undefined
					}
				}else{
					return 'integer'
				}
			}
			else if(new _Array().is(thing)){
				if(refined){
					try{
						return this.array.is(thing)
					}catch{
						return undefined
					}
				}else{
					return 'array'
				}
			}
			else if(new _LinkList().is(thing)){
				if(refined){
					try{
						return this.linkList.is(thing)
					}catch{
						return undefined
					}
				}else{
					return 'linkList'
				}
			}
			else if(new _Matrix().is(thing)){
				if(refined){
					try{
						return this.matrix.is(thing)
					}catch{
						return undefined
					}
				}else{
					return 'matrix'
				}
			}
			else if(new _Object().is(thing)){
				if(refined){
					try{
						return this.object.is(thing)
					}catch{
						return undefined
					}
				}else{
					return 'object'
				}
			}
			else if(new _Random().is(thing)){
				if(refined){
					try{
						return this.random.is(thing)
					}catch{
						return undefined
					}
				}else{
					return 'random'
				}
			}
			else if(new _Tree().is(thing)){
				if(refined){
					try{
						return this.tree.is(thing)
					}catch{
						return undefined
					}
				}else{
					return 'tree'
				}
			}
			else if(new _Strata().is(thing)){
				if(refined){
					try{
						return this.strata.is(thing)
					}catch{
						return undefined
					}
				}else{
					return 'strata'
				}
			}
		
		
	}

	log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }

}

