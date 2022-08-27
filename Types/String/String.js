import * as assert  from "node:assert";

class String{
    constructor(){

    }
    isString(str, n_min, n_max){
		if(str && n_min && n_max){
			try{
				assert.equal(this._isString(str), true)
				assert.equal(str.length>=n_min, true)
				assert.equal(str.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(str && n_min){
			try{
				assert.equal(this._isString(str), true)
				assert.equal(str.length>=n_min, true)
			}catch(err){
				return false
			}
		}else if(str && n_max){
			try{
				assert.equal(this._isString(str), true)
				assert.equal(str.length<=n_max, true)
			}catch(err){
				return false
			}
		}else if(str){
			try{
				assert.equal(this._isString(str), true)
			}catch(err){
				return false
			}
		}else{
			return false
		}
		return true
	}

	_isString(s) {
		return (s instanceof String || typeof(s) === 'string');
	}

    _genString(){
        var str='';
        for (var i=0; i<this.randomRange(this.minStr, this.maxStr); i++){
			str+=this.charSet.charAt(Math.floor(Math.random()*this.charSet.length))
		}
        return str;
    }

	randomString(except){
		var str = this._genString()
		if(this.comparators.isEqual(str, except)){
			return this.randomString(except)
		}else{
			return str
		}
	}

	
    assertStringLength(str, str_min, str_max){
		if(!this._isString(str)){return false}

		if(str_min&& str_max){
			try{
				assert.equal(str.length>=str_min, true)
				assert.equal(str.length<=str_max, true)
			}catch{
				return false
			}
		}else if(str_min){
			try{
				assert.equal(str.length>=str_min, true)
			}catch{
				return false
			}
		}else if(str_max){
			try{
				assert.equal(str.length<=str_max, true)
			}catch{
				return false
			}
		}else{
			return false
		}
		return true
	}

    isEqual(str1, str2, equal=[true]){
		if(
			this.types.isString(str1)
			&&
			this.types.isString(str2)
			&&
			str1.length==str2.length
		){
			if(str1==str2){
				return true
			}else{
				equal[0]=false
				return false
			}
		}else{
			equal[0]=false
			return false
		}
		return equal[0]
	}
}