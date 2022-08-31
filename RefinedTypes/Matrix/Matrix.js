import * as assert  from "node:assert";
import { _Array } from "../Array/Array.js";
export class _Matrix{
    constructor(matrix, min_width, max_width, min_depth, max_depth, map){
        this.matrix = matrix
        this.min_width = min_width
        this.max_width = max_width
        this.min_depth = min_depth
        this.max_depth = max_depth
    }

    context(matrix){
        return {
            'type': 'matrix',
            'matrix': this.matrix,
            'depth': this.getDepth(matrix),
            'min_width': min_width,
            'max_width': max_width,
            'min_depth': min_depth,
            'max_depth': max_depth,
            'map':{
                //matricies can have arbitrary payload [whatever, [[],[whatever else, []]],[]]
            }
        }
    }
    exists(){
        return true
    }

    is(matrix){
        if(matrix){
            if(this.min_width){
                try{
                    assert(this.min_width, this.getWidth(matrix)['max'])
                }catch{
                    return
                }
            }
            if(this.max_width){
                try{
                    assert(this.min_width, this.getWidth(matrix)['min'])
                }catch{
                    return
                }
            }
            if(this.min_depth){
                try{
                    assert(this.min_width, this.getDepth(matrix))
                }catch{
                    return
                }
            }
            if(this.max_depth){
                try{
                    assert(this.min_width, this.getDepth(matrix))
                }catch{
                    return
                }
            }
            return this.context(matrix)
        }
    }

    getWidth(matrix, min=[matrix.length], max=[0]){
        if(matrix.length<=min[0]){min[0]=matrix.length}
        if(matrix.length>=max[0]){max[0]=matrix.length}
        for(var i = 0; i<matrix.length; i++){
            //min should represent the smallest width in the matrix
            if(new _Array().is(matrix[i])){
                this.getWidth(matrix[i], min, max)
            }
        }
        return {'min':min[0], 'max':max[0]}
    }


    getDepth(matrix, depth=[0]){
        var arr = new _Array()
        if(arr.is(matrix)){
            for(var i = 0; i<matrix.length; i++){
                if(arr.is(matrix[i])){
                    depth[0]+=1
                    this.getDepth(matrix[i], depth)
                }
            }
        }
        return depth[0]
    }

    log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}