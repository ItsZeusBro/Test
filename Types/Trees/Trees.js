import * as assert  from "node:assert";

class Tree{
    constructor(){

    }

    assertTreeDepth(obj, d_min, d_max){
        var get = new Getters()
        try{
            var d = get.treeDepth(obj)
            assert.equal(d>=d_min, true)
            assert.equal(d<=d_max, true)
            return true
        }catch{
            return false
        }
        
    }

    getTreeWidth(obj, w=[0]){
        //gets an array of
        if(this.validation._isObject(obj)){
            for(var i = 0; i<Object.keys(obj).length; i++){
                var key = Object.keys(obj)[i]
                var val = obj[key]
                if(i>=w[0]){w[0]=i}
                this.treeWidth(val, w)
            } 
        }
        return w[0]
    }

    getTreeDepth(obj, n=0, d=[0]){
        if(this.validation._isObject(obj)){
            for(var i = 0; i<Object.keys(obj).length; i++){
                var key = Object.keys(obj)[i]
                var val = obj[key]
                this.treeDepth(val, n+1, d)
            } 
        }
        if(n>=d[0]){d[0]=n}
        return d[0]
    }

    getTreeSectionAtWidth(w, section=[]){
        //gets a cross section object at depth n
        if(this.validation._isObject(obj)){
            for(var i = 0; i<Object.keys(obj).length; i++){
                var key = Object.keys(obj)[i]
                var val = obj[key]
                if(i==w){
                    section.push(val)
                }
                this.treeSectionAtWidth(w, section)
            } 
        }
        return section
    }

    getTreeSectionAtDepth(d, n=0, section=[]){
        //gets a cross section object at depth n
        if(this.validation._isObject(obj)){
            for(var i = 0; i<Object.keys(obj).length; i++){
                var key = Object.keys(obj)[i]
                var val = obj[key]
                if(d==n){
                    section.push(val)
                }
                this.treeDepth(d, n+1)
            } 
            
        }
        return section
    }

    randomTree(except, n){
		var obj = this._randomTree(n)

		if(this.comparators.isEqual(obj, except)){
			return this.randomTree(n, except)
		}else{
			return obj
		}
	}

	_randomTree(n){
		var obj={}
		if(n==1){
			obj[this.randomString(n)]=this.random(3)
		}else if(n){
			for(var i=0; i<n; i++){
				obj[this.randomString(n)]=this._randomObject(n-1)
			}
		}
		return obj
	}
}