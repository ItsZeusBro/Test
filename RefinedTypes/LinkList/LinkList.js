import * as assert  from "node:assert";

export class _LinkList{
    constructor(min=1, max=2, map=[], llist){
        this.llist=llist
        this.min = min
        this.max = max
        this.map = map
        this.v_max = this.max
    }

    reset(){
        this.v_max=this.max
    }
    dec(){
        if(this.v_max){
            this.v_max-=1
        }
    }

    exists(){return true}

    context(llist){
        return {
            'type':'linkList',
            'linkList':llist,
            'size':this.getSize(llist),
            'min':this.min,
            'max':this.max,
            'map':this.map
        }
    }

    is(llist){
        if(llist){

            if(this.min){
                try{
                    assert(this.min_width <= this.getSize(llist))
                }catch{
                    return
                }
            }

            if(this.max){
                try{
                    assert(this.max_width >= this.getSize(llist))
                }catch{
                    return
                }
            }
            
            return this.context(llist)
        }
    }

    isLinkList(llist){
        //size must be 1 or more
        if(this.getSize(llist)>=1){
            return true
        }
    }

    getSize(llist, n=[0]){
        if(!(llist instanceof Object)){return n[0]}
        if((llist['next'] instanceof Object && Object.keys(llist['next']).includes('next')) || llist['next']==null){
            n[0]+=1
            this.getSize(llist['next'], n)
        }else{
            n[0]=0
            return n[0]
        }
        return n[0]
    }



    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }

}

