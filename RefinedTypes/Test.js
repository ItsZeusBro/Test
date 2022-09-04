import { RefinedTypes } from "./RefinedTypes.js"
import { IntegerTest } from "./Integer/Test.js"
import { StringTest } from "./String/Test.js"
import { NullTest } from "./Null/Test.js"
import { ArrayTest } from "./Array/Test.js"

import {_Integer} from "./Integer/Integer.js"
import {_String} from "./String/String.js"
import {_Array} from "./Array/Array.js"
import {_Matrix} from "./Matrix/Matrix.js"
import {_Null} from "./Null/Null.js"
import {_Tree} from "./Tree/Tree.js"
import {_Strata} from "./Strata/Strata.js"
import {_Object} from "./Object/Object.js"
import {_LinkList} from "./LinkList/LinkList.js"


class RefinedTypeTest{
    constructor(){
        this.tests()
    }
    tests(){
        this.refinedTypes()
        // new IntegerTest()
        // new StringTest()
        // new NullTest()
        // new ArrayTest()
    }
    refinedTypes(){
        var refinedTypes = new RefinedTypes({
            'integer':new _Integer(0, 100),
            'string': new _String(1, 20),
            'array': new _Array(1, 10, {'types':[new _Integer(0, 50), new _String(1, 20)]}),
            'null': new _Null([null, 'null', false, 'false', 0, '0']),
            'object': new _Object(
                0, 5, 
                {
                    //types are used to fill in the rest if there are any, or all of them if no keys are present
                    '1':new _Integer(0, 100),
                    '2':new _String(1, 10),
                    '3':new _Integer(101, 200),
                    '4':new _String(11, 20),
                    'types':[
                        new _Null([null, 'null', false, 'false', 0, '0']), 
                        new _Array(1, 10, {'types':[new _Integer(0, 50), new _String(1, 20)]})]
                }
            )
        })

        for(var i = 0; i<1000; i++){
            console.log(refinedTypes.is(refinedTypes.random()))
        }
        // console.log(refinedTypes.is('some string'))
        // console.log(refinedTypes.is(100))
        // console.log(refinedTypes.is([1, 2, 3, '4', '5']))
    }
}

new RefinedTypeTest()