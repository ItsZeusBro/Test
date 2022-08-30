import * as assert  from "node:assert";

export class _Object{
    constructor(min_width, max_width, map){
        this.min_width=min_width;
        this.max_width=max_width;
        this.map=map;
    }

    context(){
        return {
            'min_width':this.min_width,
            'max_width':this.max_width,
            'map':{
                //you can map keys to types
            },
            'array':false,
            'string':false,
            'matrix':false,
            'strata':false,
            'linkList':false,
            'null':false
        }
    }
    is(object){
        //return true if it is an object
        if(object && this.min_width && this.max_width){
            try{
                assert.equal(this._isObject(object), true)
                assert.equal(this.width(object)>=this.min_width, true)
                assert.equal(this.width(object)<=this.max_width, true)
            }catch(err){
                return false
            }
        }else if(object && this.min_width){
            try{
                assert.equal(this._isObject(object), true)
                assert.equal(this.width(object)>=this.min_width, true)
            }catch(err){
                return false
            }
        }else if(object && this.max_width){
            try{
                assert.equal(this._isObject(object), true)
                assert.equal(this.width(object)<=this.max_width, true)
            }catch(err){
                return false
            }
        }else if(object){
            try{
                assert.equal(this._isObject(object), true)
            }catch(err){
                return false
            }
        }else{
            return false
        }
        return 'object'
    }
    width(object){
        if(this._isObject(object)){
            return Object.keys(object).length
        }
    }

    _isObject(obj){
		if(obj instanceof Object && obj!==null){
            for(var i = 0; i<Object.keys(obj).length; i++){
                var key = Object.keys(obj)[i]
                if(obj[key] instanceof Object && obj!==null){
                    return false
                }
            }            
			return true
		}else{
			return false
		}
	}
    exists(){return true}
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}