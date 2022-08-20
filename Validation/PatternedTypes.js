//what can we do with patterns?
//type checking
//analysis (abstracting away recurrency with numbers)
//levels of equality
//searching functions (this contains that, etc...)
//
//this can be used for base case patterns
export class PatternEquality{
    constructor(){
        //this is an equality descriptor class that aims at describing the types of equality desired
        //for pattern analysis
    }

}
export class PatternedType{
    constructor(type, pattern){

    } 

    equals(pattern){

    }

    is(pattern){
        //checks if pattern is PatternedType
    }
}

export class IntPattern{
    constructor(){
        this.type='integer'
    }
    equals(intPattern, equality){

    }
    is(intPattern){
        //checks if intPattern is an IntPattern
    }
}
export class StrPattern{
    constructor(){
        this.type='string'
    }
    equals(strPattern){

    }
    is(strPattern){
        //checks if intPattern is an StrPattern
    }
}

export class ObjPattern{
    constructor(){
        this.type='object'
        //what is in a Object Pattern?
        //1. a recurring key pattern
        //2. an exception to a base case pattern that is recursable (which is not necessarily a recuring pattern)
        //what terminates an Object Pattern?
        //1. another Object Pattern as a base case (only if we look ahead)
        //2. something not in the set of recurring key patterns (exception termination)
        //3. something defined in a base pattern
    }
    equals(objPattern){

    }
    is(objPattern){
        //checks if objPattern is an ObjPattern
    }
}
export class MtxPattern{
    constructor(){
        this.type='matrix'
        //what is in a Matrix Pattern?
        //1. a shape of the higher order rectangular matrix
        //2. a possible recursive pattern of rectangular matricies inside rectangular matricies
        // where each cell is possibly represented as some other matrix with its own shape
        //3. data type allignment at recurring intervals

    }
    equals(mtxPattern){
        //checks if MtxPattern equals mtxPattern
    }
    is(mtxPattern){
        //checks if mtxPattern is an MtxPattern
    }

}
    

export class StrataPattern{
    constructor(){
        this.type='strata'
        //what is in a Strata Pattern?
        //payload keys and payload patterns
    }
    equals(strataPattern){
        //checks if strataPattern equals StrataPattern

    }

    is(strataPattern){
        //checks if strataPattern is an StrataPattern
    }
}




