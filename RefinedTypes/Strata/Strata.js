import * as assert  from "node:assert";

export class _Strata{
    constructor(){

    }
    
    _context(strata){
        return {
            'refType':this           
        }
    }

    compare(){
        //compares data by type map (shallow comparison)
        //or compares data deeply for which a type map is not needed
    }
    
    is(strata){
        //return true if it is an strata
        return this._context(strata)
    }
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}