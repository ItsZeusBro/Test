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
		this.integer=new Integer(descriptor['integer'])
		this.string=new String(descriptor['string'])
		this.null=new Null(descriptor['null'])
		this.array=new Array(descriptor['array'])
		this.object=new Object(descriptor['object'])
		this.tree= new Tree(descriptor['tree'])
		this.matrix = new Matrix(descriptor['matrix'])
		this.random = new Random(descriptor['random'])
		this.linkList = new LinkList(descriptor['linkList'])
		this.strata = new Strata(descriptor['strata'])

	}	
    assert(){
        
    }

	random(){

	}
	context(){
		var context = {}
		context['integer']=this.integer.context()
		context['string']=this.string.context()
		context['null']=this.null.context()
		context['array']=this.array.context()
		context['object']=this.object.context()
		context['tree']=this.tree.context()
		context['matrix']=this.matrix.context()
		context['random']=this.random.context()
		context['linkList']=this.linkList.context()
		context['strata']=this.strata.context()
		return context
	}	

	compare(){
		
	}

	log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }

}

