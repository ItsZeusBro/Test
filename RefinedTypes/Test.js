// import { RefinedTypes } from "./RefinedTypes.js"
import { _IntegerTest } from "./Integer/Test.js"
import { _FloatTest } from "./Float/Test.js"
import { _StringTest } from "./String/Test.js"
// import { StringTest } from "./String/Test.js"
// import { NullTest } from "./Null/Test.js"

// import {_Integer} from "./Integer/Integer.js"
// import {_String} from "./String/String.js"
// import {_Matrix} from "./Matrix/Matrix.js"
// import {_Null} from "./Null/Null.js"
// import {_Tree} from "./Tree/Tree.js"

class RefinedTypeTest{
    constructor(){
        this.tests()
    }
    tests(){
        new _IntegerTest(10000)
        new _FloatTest(1.0)
        new _StringTest(10000)
        //this.refinedTypes()
    }
    // refinedTypes(){
    //     var refinedTypes = new RefinedTypes({
    //         'integer':new _Integer(0, 100),
    //         'string': new _String(1, 20),
    //         'matrix': new _Matrix(1, 10),
    //         'null': new _Null([null, 'null', false, 'false', 0, '0']),
    //         'tree': new _Tree(
    //             0, 5
    //             // {
    //             //     //types are used to fill in the rest if there are any, or all of them if no keys are present
    //             //     '1':new _Integer(0, 100),
    //             //     '2':new _String(1, 10),
    //             //     '3':new _Integer(101, 200),
    //             //     '4':new _String(11, 20),
    //             //     'types':[
    //             //         new _Null([null, 'null', false, 'false', 0, '0']), 
    //             //         new _Array(1, 10, {'types':[new _Integer(0, 50), new _String(1, 20)]})]
    //             // }
    //         )
    //     })

    //     for(var i = 0; i<1000; i++){
    //         console.log(refinedTypes.is(refinedTypes.random()))
    //     }
    //     // console.log(refinedTypes.is('some string'))
    //     // console.log(refinedTypes.is(100))
    //     // console.log(refinedTypes.is([1, 2, 3, '4', '5']))
    // }

}

new RefinedTypeTest()