export class IntPattern{
    constructor(){

    }
    isInteger(n, n_min, n_max){
        //ng means assert that integer n is greater than ng
        //nl means assert that integer n is less than nl
    
        if(n && n_min && n_max){
            try{
                assert.equal(typeof n ==='number', true)
                assert.equal(n>=n_min, true)
                assert.equal(n<=n_max, true)
            }catch(err){
                return false
            }
        }else if(n && n_min){
            try{
                assert.equal(typeof n ==='number', true)
                assert.equal(n>=n_min, true)
            }catch(err){
                return false
            }
        }else if(n && n_max){
            try{
                assert.equal(typeof n ==='number', true)
                assert.equal(n<=n_max, true)
            }catch(err){
                return false
            }
        }else if(n){
            try{
                assert.equal(typeof n ==='number', true)
            }catch(err){
                return false
            }
        }else{
            return false
        }
        return true
    }
    assertIntRange(int, intPattern){
        if(int_min&&int_max){
            try{
                assert.equal(int>=int_min, true)
                assert.equal(int<=int_max, true)
            }catch{
                return false
            }
        }else if(int_min){
            try{
                assert.equal(int>=int_min, true)
            }catch{
                return false
            }
        }else if(int_max){
            try{
                assert.equal(int<=int_max, true)
            }catch{
                return false
            }
        }else{
            return false
        }
        return true
    }
}
export class StrPattern{
    constructor(){
        
    }
    isString(str, n_min, n_max){
        if(str && n_min && n_max){
            try{
                assert.equal(typeof str === 'string', true)
                assert.equal(str.length>=n_min, true)
                assert.equal(str.length<=n_max, true)
            }catch(err){
                return false
            }
        }else if(str && n_min){
            try{
                assert.equal(typeof str === 'string', true)
                assert.equal(str.length>=n_min, true)
            }catch(err){
                return false
            }
        }else if(str && n_max){
            try{
                assert.equal(typeof str === 'string', true)
                assert.equal(str.length<=n_max, true)
            }catch(err){
                return false
            }
        }else if(str){
            try{
                assert.equal(typeof str === 'string', true)
            }catch(err){
                return false
            }
        }else{
            return false
        }
        return true
    }
    assertStringLength(str, strPattern){
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
}
export class ObjectPattern{
    constructor(){
        
    }
    isObject(obj, w_min, w_max, d_min, d_max, n=0, maxdepth=[0], truth=[true]){
        if(!truth[0]){return false}
        if((typeof obj === 'object') &&(d_max||d_min)&&(n>=maxdepth[0])){maxdepth[0]=n}
    
        if((typeof obj === 'object') && Object.keys(obj).length){
            if(w_min||w_max||d_max||d_min){
                var i;
                if(d_max||d_min){
                    for(i = 0; i<Object.keys(obj).length; i++){
                        this.isObject(obj[Object.keys(obj)[i]], w_min, w_max, d_min, d_max, n+1, maxdepth, truth)
                    }
                }
                if(w_min){
                    try{
                        assert.equal((Object.keys(obj).length)>=w_min, true)
                    }catch(err){
                        truth[0]=false
                        return truth[0]
                    }
                }
                if(w_max){
                    try{
                        assert.equal((Object.keys(obj).length)<=w_max, true)
                    }catch(err){
                        truth[0]=false
                        return truth[0]
                    }
                }
            }else{
                return truth[0]
            }
        }else{
            return truth[0]
        }
    
        if(n==0){
            if(d_max){
                try{
                    assert.equal(maxdepth[0]<=d_max, true)
                }catch(err){
                    truth[0]=false;
                    return truth[0];
                }
            }
            if(d_min){
                try{
                    assert.equal(maxdepth[0]>=d_min, true)
                }catch(err){
                    truth[0]=false
                }
            }
        }
        return truth[0]
    }
    assertObjectWidth(obj, ow_min, ow_max){
        if(ow_min&&ow_max){
            try{
                assert.equal(Object.keys(obj).length>=ow_min, true)
                assert.equal(Object.keys(obj).length<=ow_max, true)
            }catch{
                return false
            }
        }else if(ow_min){
            try{
                assert.equal(Object.keys(obj).length>=ow_min, true)
            }catch{
                return false
            }
        }else if(ow_max){
            try{
                assert.equal(Object.keys(obj).length<=ow_max, true)
            }catch{
                return false
            }
        }else{
            return false
        }
    }
}
export class MatrixPattern{
    constructor(){

    }
    isArray(arr, n_min, n_max){
        //n_min means assert that array arr.length is greater than n_min
        //n_max means assert that array arr.length is less than n_max
        if(arr && n_min && n_max){
            try{
                assert.equal(Array.isArray(arr), true)
                assert.equal(arr.length>=n_min, true)
                assert.equal(arr.length<=n_max, true)
            }catch(err){
                return false
            }
        }else if(arr && n_min){
            try{
                assert.equal(Array.isArray(arr), true)
                assert.equal(arr.length>=n_min, true)
            }catch(err){
                return false
            }
        }else if(arr && n_max){
            try{
                assert.equal(Array.isArray(arr), true)
                assert.equal(arr.length<=n_max, true)
            }catch(err){
                return false
            }
        }else if(arr){
            try{
                assert.equal(Array.isArray(arr), true)
            }catch(err){
                return false
            }
        }else{
            return false
        }
        return true
    }
    assertArrayWidth(array, aw_min, aw_max){
        if(aw_min&& aw_max){
            try{
                assert.equal(array.length>=aw_min, true)
                assert.equal(array.length<=aw_max, true)
            }catch{
                return false
            }
        }else if(aw_min){
            try{
                assert.equal(array.length>=aw_min, true)
            }catch{
                return false
            }
        }else if(aw_max){
            try{
                assert.equal(array.length<=aw_max, true)
            }catch{
                return false
            }
        }else{
            return false
        }
        return true
    }
    
}

export class StrataPattern{
    constructor(){

    }
}

export class PatternedType{
    constructor(type, pattern){

    } 
}


