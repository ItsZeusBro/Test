import { RefinedTypes } from "./RefinedTypes.js";
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
import * as assert  from "node:assert";


export class RefinedTypesTest{
    constructor(){
        var descriptor={
            'integer': new _Integer(1, 5000),
            'string': new _String(1, 10),
            'null': new _Null([null, NaN, 0, '0', false]),
            'array': new _Array(0, 10),
            'object': new _Object(1, 4),
            'linkList': new _LinkList(1, 2),
            //'tree': new Tree()
            // 'matrix': new Matrix(),
            // 'random': new Random(),
            // 'strata': new Strata(),
        }
        this.types  = new RefinedTypes(descriptor)
        this.tests()
    }
    tests(){
        this.is()
    }

    is(){
        assert.equal(this.types.is(1234)['type']=='integer', true)
        assert.equal(this.types.is('1234')['type']=='string', true)
        assert.equal(this.types.is(NaN)['type']=='null', true)
        assert.equal(this.types.is([1, '2', 0, 1, '2', null])['type']=='array', true)
        assert.equal(this.types.is({'payload':{}, 'next':{'payload':{}, 'next':null}})['type']=='linkList', true)
        assert.equal(this.types.is({'payload':{}, 'next':null})['type']=='linkList', true)
        assert.equal(this.types.is({'payload':{}, 'next':{'payload':{}, 'next':{}}}), undefined)
        assert.equal(this.types.is({'payload':{}, 'next':{'payload':{}, 'next':{}}}), undefined)
        // assert.equal(this.types.typeOf({'next':'should not be a link list'}), 'object')
        // assert.equal(this.types.typeOf({'next':12345}), 'object')
    }

}



var rtt = new RefinedTypesTest()
