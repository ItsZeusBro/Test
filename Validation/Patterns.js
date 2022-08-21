//what can we do with patterns?
//type checking
//analysis (abstracting away recurrency with numbers)
//levels of equality
//searching functions (this contains that, etc...)
//
//this can be used for base case patterns
//
export class Pattern{
    //this describes a pattern as an abstract object
        //{
        //  type:
        //  schema:
        //  levels:
        //  recurrance: //data type or object key recurrance pattern as a sequence
        //  bases:      //some sort of list of base case descriptors
        //  statistics: //(all of our statistical functions are going to use the spiral abstraction)
        //}
    constructor(schema){
        //this initiates a pattern from a higher level
        this.type = typeof schema
        this.schema = schema
        this.pattern = this.describe(schema)
    } 
    describe(){
        
    }
    equals(pattern){

    }

    is(pattern){
        //checks if pattern is PatternedType
    }
}
export class PatternEquality{
    constructor(){
        //this is an equality descriptor class that aims at describing the types of equality desired
        //for pattern analysis
    }
    typeEquality(pattern1, pattern2, n){
        //asserts at most n levels of type equality if n levels exist for both patterns
        //if one pattern runs out of levels at m before n, type equality only can exist up to m, and is evaluated for m
    }
    deepEquality(){

    }
    shallowEquality(){

    }
    arbitraryEquality(){

    }
    metaphoricalEquality(){
        //where some pattern is almost equal to another (within some range of equality)
    }
    setEquality(){
        //if two patterns share some logical set of behavior it returns returns that crossection of behavior
    }

    booleanEquality(){
        //this is a compound equality of more primitive equalities
    }

    //what is pattern equality from an abstract description standpoint?
    //type checking at various levels
    //deep equality (equalt at every level except n number of levels from the bottom or except for the base cases)
    //shallow type equality for n number of levels from the top
    //arbitrary equality (equal at n number of levels starting from some level (aka, partial equality))
    //boolean equality can be used on any of these equality types for more general equality checks



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




