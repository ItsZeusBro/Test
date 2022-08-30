import * as assert  from "node:assert";

export class _LinkList{
    constructor(min=1, max=2, map=[]){
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

    is(llist){
        if(llist && this.min && this.max){
			try{
				assert.equal(this.isLinkList(llist), true)
				assert.equal(this.getSize(llist)>=this.min, true)
				assert.equal(this.getSize(llist)<=this.max, true)
			}catch(err){
				return
			}
		}else if(llist && this.min){
			try{
				assert.equal(this.isLinkList(llist), true)
				assert.equal(this.getSize(llist)>=this.min, true)
			}catch(err){
				return
			}
		}else if(llist && this.max){
			try{
				assert.equal(this.isLinkList(llist), true)
				assert.equal(this.getSize(llist)<=this.max, true)
			}catch(err){
				return
			}
		}else if(llist){
			try{
				assert.equal(this.isLinkList(llist), true)
			}catch(err){
				return
			}
		}else{
			return
		}
		return 'linkList'

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

    context(){
        return {
            'min':this.min,
            'max':this.max,
            'map':this.map,        
        }
    }

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }

}

console.log(new _LinkList().is({'payload':{}, 'next':{'payload':{}, 'next':null}}))
console.log(new _LinkList().is({'payload':{}, 'next':null}))