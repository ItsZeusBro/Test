import * as assert  from "node:assert";
import * as util from "node:util"
import { Integer } from "./Integer/Integer.js";
import { String } from "./String/String.js";
import { Null } from "./Null/Null.js";
import { Array } from "./Array/Array.js";
import { LinkList } from "./LinkList/LinkList.js";
import { Matrix } from "./Matrix/Matrix.js";
import { Object } from "./Object/Object.js";
import { Random } from "./Random/Random.js";
import { Strata } from "./Strata/Strata.js";
import { Tree } from "./Trees/Trees.js";

export class Types{
	constructor(descriptor){
		//This should expose all type functions from a general level
		this.integer=descriptor['integer']
		this.string=descriptor['string']
		this.null=descriptor['null']
		this.array=descriptor['array']
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

	get(type){
		if(type=='integer'){return this.integer}
		else if(type=='string'){return this.string}
		else if(type=='null'){return this.null}
		else if(type=='array'){return this.array}
		else if(type=='object'){return this.object}
		else if(type=='tree'){return this.tree}
		else if(type=='matrix'){return this.matrix}
		else if(type=='random'){return this.random}
		else if(type=='linkList'){return this.linkList}
		else if(type=='strata'){return this.strata}
	}

	random(type){
		//generates a random thing of specified type if properties present, otherwise default properties apply
		if(this.get(type)){this.get(type).random()}
	}

	context(){
		var context = {}
		if(this.isType('integer')){context['integer']=this.integer.context()}
		if(this.isType('string')){context['string']=this.string.context()}
		if(this.isType('null')){context['null']=this.null.context()}
		if(this.isType('array')){context['array']=this.array.context()}
		if(this.isType('object')){context['object']=this.object.context()}
		if(this.isType('tree')){context['tree']=this.tree.context()}
		if(this.isType('matrix')){context['matrix']=this.matrix.context()}
		if(this.isType('random')){context['random']=this.random.context()}
		if(this.isType('linkList')){context['linkList']=this.linkList.context()}
		if(this.isType('strata')){context['strata']=this.strata.context()}
		return context
	}	

	compare(thing1, thing2){
		//compares two things of unknown type
	}

	isType(type){
		//check if type actually exists in this.type.isType() which should return true
		try{
			if(this.get(type).isType()){return true}
		}
		catch{
			return false
		}
	}
	type(thing){
		//returns type
	}

	log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }

}

var descriptor={
	'integer': new Integer(),
	'string': new String(),
	'null': new Null(),
	'array': new Array(),
	'object': new Object(),
	'linkList': new LinkList(),
	'matrix': new Matrix(),
	'random': new Random(),
	'strata': new Strata(),
	'tree': new Tree()
}