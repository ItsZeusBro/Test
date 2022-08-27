import * as assert  from "node:assert";

class Matrix{
    constructor(){

    }

    getMatrixDepth(mtx, n=0, d=[0]){
        if(this.validation._isArray(mtx)){
            for(var i = 0; i<mtx.length; i++){
                if(n>=d[0]){d[0]=n}
                this.matrixDepth(mtx[i], n+1, d)
            }
        }
        return d[0]
    }

    getMatrixWidth(mtx, w=[0]){
        //a matrix does not have to be a square
        if(this.validation._isArray(mtx)){
            for(var i = 0; i<mtx.length; i++){
                if(i>=w[0]){w[0]=i}
                this.treeWidth(mtx[i], w)
            } 
        }
        return w[0]
    }

    getMatrixSectionAtDepth(mtx, d, section=[]){
        if(d==0){
            section.push(mtx)
        }else if(this.validation._isArray(mtx)){
            for(var i = 0; i<mtx.length; i++){
                this.matrixSectionAtDepth(mtx[i], d-1, section)
            }
        }else{
            return section
        }
        return section
    }
    getMatrixSectionAtWidth(mtx, w, section){
        
    }

    randomMatrix(except, n=this.mtxDepth){
		var mtx=[]
		if(n==1){
			return this.randomArray(except)
		}else if(n){
			for(var i=0; i<n; i++){
				mtx.push(this.randomMatrix(except, n-1))
			}
		}
		return mtx
	}
    
    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}