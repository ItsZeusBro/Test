import * as assert  from "node:assert";
import { _Integer } from "../Integer/Integer.js";
import { DefaultMap } from "../Default/DefaultMap.js"
export class _String{
    constructor(min, max, charSet){
        this.min;
        this.max;
        this.charSet;
        if(!min){this.min=DefaultMap['string_min_size']}else{this.min=min}
        if(!max){this.max=DefaultMap['string_max_size']}else{this.max=max}
        if(!charSet){this.charSet=DefaultMap['string_charset']}else{this.charSet=charSet}
        this.context;
    }
    
    _context(string){
        return {
			'type':'string',
			'data':string,
            'refType':this,
            'min':this.min,
            'max':this.max,
            //'pattern':undefined //some regex pattern (we need that regex generator for this feature)
        }
    }

    is(string){
        //return true if it is a string
        try{this.assert(string)}catch{return}
        return this._context(string)

    }
    
    compare(){
        //compares data by type map (shallow comparison)
        //or compares data deeply for which a type map is not needed
    }

    assert(string){
        assert.equal(this._isString(string), true)
        assert.equal(this.min <= string.length, true)
        assert.equal(this.max >= string.length, true)
    }

    random(min, max){
        var _min; var _max;
        if(min){_min=min}else if(this.min){_min=this.min}else{_min=this.d_min}
        if(max){_max=max}else if(this.max){_max=this.max}else{_max=this.d_max}
        this.context = this._context(this.randomString(_min, _max))
        return this.context['data']
    }

    _isString(string) {return (string instanceof String || typeof(string) === 'string');}

    randomString(min, max){
		var str='';
        for (var i=0; i<new _Integer()._randomRange(min, max); i++){
			str+=this.charSet.charAt(Math.floor(Math.random()*this.charSet.length))
		}
        return str;
	}

    log(obj){if(obj){console.log(util.inspect(obj, false, null, true))}}
}