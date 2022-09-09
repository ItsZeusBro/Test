// import { RefinedTypes } from "./RefinedTypes.js"
import { _IntegerTest } from "./Integer/Test.js"
import { _FloatTest } from "./Float/Test.js"
import { _StringTest } from "./String/Test.js"
import { _NullTest } from "./Null/Test.js"
import { _MatrixTest } from "./Matrix/Test.js"
import { _TreeTest } from "./Tree/Test.js"
import { RefinedTypes } from "./RefinedTypes.js"
import { _ObjectTest } from "./Object/Test.js"
import { _ArrayTest } from "./Array/Test.js"

class RefinedTypeTest{
    constructor(){
        
        this.refType(new RefinedTypes())
        this.refType(new RefinedTypes(this.map1()))
    }
    refType(_reftype){
        for(var i = 0; i<10000; i++){
            var refType = _reftype.random()
            _reftype.log(_reftype.is(refType))
            _reftype.assert(refType)
        }
    }
    map1(){
        return {
                'null': new _Null(),
                'integer': new _Integer(),
                'float': new _Float(),
                'stat': new _Stat(),            
                'string': new _String(),
                'array': new _Array(),
                'matrix': new _Matrix(),
                'object': new _Object(),
                'tree': new _Tree()
                // 'strata': new _Strata()
            }
        
    }

}

new RefinedTypeTest()