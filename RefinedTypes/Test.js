import { RefinedTypes } from "./RefinedTypes.js";

export class RefinedTypesTest{
    constructor(){
        var descriptor={
            'integer': new Integer(1, 2),
            'string': new String(1, 2),
            'null': new Null([null, NaN, 0, '0', false]),
            'array': new Array(0, 10, ['integer', 'string', 'null']),
            // 'object': new Object(),
            // 'linkList': new LinkList(),
            // 'matrix': new Matrix(),
            // 'random': new Random(),
            // 'strata': new Strata(),
            // 'tree': new Tree()
        }
        this.types  = new RefinedTypes(descriptor)
        this.tests()
    }
    tests(){
        this.typeOf()
    }

    typeOf(){
        console.log(this.types.typeOf(1234))
        console.log(this.types.typeOf('1234'))
        console.log(this.types.typeOf(NaN))
        console.log(this.types.typeOf([1, '2', 0, 1, '2', null]))
    }
}





