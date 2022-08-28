import * as assert  from "node:assert";

export class LinkList{
    constructor(descriptor){

    }

    context(){
        return {
            
        }
    }

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}