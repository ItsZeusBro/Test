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
        new RefinedTypes({
            'integer':new _Integer(0, 100),
            'string': new _String(1, 20),
            'array': new _Array(1, 10, {'types':[new _Integer(0, 50), new _String(1, 20)]})
        })
        new IntegerTest()
        new StringTest()
        new NullTest()
        new ArrayTest()
    }
}

new RefinedTypeTest()