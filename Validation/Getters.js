export class Getters{
    constructor(){

    }
    stratumWidth(objOrArray, payload){
		var count = 0;
		if(Array.isArray(objOrArray)){
			for(var i = 0; i<objOrArray.length; i++){
				var val = objOrArray[i]
				if(typeof val === 'object'){
					//make we only count objects towards the width
					count+=1
				}
			}
			return count
		}else if(typeof objOrArray==='object'){
			for(var i = 0; i<Object.keys(objOrArray).length; i++){
				var key = Object.keys(objOrArray)[i]
				var val = objOrArray[key]
				if(Array.isArray(val)&&(!payload['keys'].includes(key))){
					//make we only count arrays towards the width
					count+=1
				}
			}
			return count
		}else{
			return 0
		}
	}

    strataDepth(objOrArray, payload, n=0, d=[0]){
		if(Array.isArray(objOrArray)){
			for(var i = 0; i<objOrArray.length; i++){
				var val = objOrArray[i]
				if(typeof val === 'object'){
                    if(n>=d[0]){d[0]=n}
                    this.strataDepth(val, payload, n+1, d)
				}
			}
		}else if(typeof objOrArray==='object'){
			for(var i = 0; i<Object.keys(objOrArray).length; i++){
				var key = Object.keys(objOrArray)[i]
				var val = objOrArray[key]
				if(Array.isArray(val)&&(!payload['keys'].includes(key))){
                    if(n>=d[0]){d[0]=n}
                    this.strataDepth(val, payload, n+1, d)
				}
			}
		}
        return d[0]
    }

    treeWidth(obj, w=[0]){
        //gets an array of
        if(typeof obj === 'object'){
            for(var i = 0; i<Object.keys(obj).length; i++){
                var key = Object.keys(obj)[i]
                var val = obj[key]
                if(i>=w[0]){w[0]=i}
                this.treeWidth(val, w)
            } 
        }
        return w[0]
    }

    treeDepth(obj, n=0, d=[0]){
        if(typeof obj === 'object'){
            for(var i = 0; i<Object.keys(obj).length; i++){
                var key = Object.keys(obj)[i]
                var val = obj[key]
                this.treeDepth(val, n+1, d)
            } 
        }
        if(n>=d[0]){d[0]=n}
        return d[0]
    }

    treeSectionAtWidth(w, section=[]){
        //gets a cross section object at depth n
        if(typeof obj === 'object'){
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

    treeSectionAtDepth(d, n=0, section=[]){
        //gets a cross section object at depth n
        if(typeof obj === 'object'){
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

    matrixDepth(mtx, n=0, d=[0]){
        if(Array.isArray(mtx)){
            for(var i = 0; i<mtx.length; i++){
                if(n>=d[0]){d[0]=n}
                this.matrixDepth(mtx[i], n+1, d)
            }
        }
        return d[0]
    }

    matrixWidth(mtx, w=[0]){
        //a matrix does not have to be a square
        if(Array.isArray(mtx)){
            for(var i = 0; i<mtx.length; i++){
                if(i>=w[0]){w[0]=i}
                this.treeWidth(mtx[i], w)
            } 
        }
        return w[0]
    }

    matrixSectionAtDepth(mtx, d, section=[]){
        if(d==0){
            section.push(mtx)
        }else if(Array.isArray(mtx)){
            for(var i = 0; i<mtx.length; i++){
                this.matrixSectionAtDepth(mtx[i], d-1, section)
            }
        }else{
            return section
        }
        return section
    }
    matrixSectionAtWidth(mtx, w, section){
        
    }

    lnklstLength(lnklst, l=[0]){
        if(lnklst['next']){
            l[0]+=1
            this.lnklstLength(lnklst['next'], l)
        }
        return l
    }
    lnklstAt(lnklst, n, payload=[]){
        if(n==0){
            payload.push(lnklst['payload'])
            return payload
        }else{
            if(lnklst['next']){
                this.lnklstLength(lnklst['next'], n-1)
            }else{
                return payload
            }
        }
        
        return payload
    }


}

