// import { RefinedTypes } from "./RefinedTypes.js"
import { _IntegerTest } from "./Integer/Test.js"
import { _FloatTest } from "./Float/Test.js"
import { _NullTest } from "./Null/Test.js"
import { _StringTest } from "./String/Test.js"
import { _MatrixTest } from "./Matrix/Test.js"
import { _TreeTest } from "./Tree/Test.js"
import { RefinedTypes } from "./RefinedTypes.js"
import { _ObjectTest } from "./Object/Test.js"
import { _ArrayTest } from "./Array/Test.js"
import { _Float } from "./Float/Float.js"
import { _Stat } from "./Stat/Stat.js"
import { _Null } from "./Null/Null.js"
import { _Integer } from "./Integer/Integer.js"
import { _String } from "./String/String.js"
import { _Array } from "./Array/Array.js"



class RefinedTypeTest{
    constructor(){
        
        //this.refType(new RefinedTypes())
        console.log(this.map1())
        this.refType(new RefinedTypes(this.map1()))
        console.log(this.map2())
        //this.refType(new RefinedTypes(this.map2()))

    }
    refType(_reftype){
        for(var i = 0; i<1000; i++){
            var refType = _reftype.random()
            console.log(_reftype)
            _reftype.log(_reftype.is(refType))
            _reftype.assert(refType)
        }
    }
    map1(){
        return {
                'null': new _Null([0, false, null]),
                'integer': new _Integer(1, 1000),
                'float': new _Float(-100.0, 100.0),
                'stat': new _Stat(0.0001, 1.000),            
                'string': new _String(1, 10),
                'array': new _Array(0,10),
                // 'matrix': new _Matrix(),
                // 'object': new _Object(),
                // 'tree': new _Tree()
                // 'strata': new _Strata()
            }
        
    }

    map2(){
            return {
                'null': new _Null(['0', 'null', 'false']),
                'integer': new _Integer(1001, 2000),
                'float': new _Float(101.000, 200.000),
                'stat': new _Stat(1.0001, 2.000),
                'string': new _String(11, 20),
                'array': new _Array(11,20)
            }
    }

}

new RefinedTypeTest()