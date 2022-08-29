import * as assert  from "node:assert";

export class _LinkList{
    constructor(min=1, max=2, map=['int', 'string', 'null', 'object', 'tree', 'array']){
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
				assert.equal(this._isLinkList(llist), true)
				assert.equal(this.getSize(llist)>=this.min, true)
				assert.equal(this.getSize(llist)<=this.max, true)
			}catch(err){
				return
			}
		}else if(llist && this.min){
			try{
				assert.equal(this._isLinkList(llist), true)
				assert.equal(this.getSize(llist)>=this.min, true)
			}catch(err){
				return
			}
		}else if(llist && this.max){
			try{
				assert.equal(this._isLinkList(llist), true)
				assert.equal(this.getSize(llist)<=this.max, true)
			}catch(err){
				return
			}
		}else if(llist){
			try{
				assert.equal(this._isLinkList(llist), true)
			}catch(err){
				return
			}
		}else{
			return
		}
		return 'linkList'

    }

    _isLinkList(llist){

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