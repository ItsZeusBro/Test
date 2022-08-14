export class RandGen{
    randStr(n, array=false){
		if(array){
			var arr=[]; 
			for(var i=0;i<n;i++){arr.push(this.genStr(this.randRange(0, n)))}; 
			return arr;
		}else{
			return this.genStr(this.randRange(0, n));
		}
	}

    randInt(n, array=false){
		if(array){
			var arr=[]; 
			for(var i=0; i<n; i++){arr.push(this.randRange(0, n))};
			return arr;
		}else{
			return this.randRange(0,n);
		}
	}

    randArr(n, array=false){
		if(array){
			var arrOfArr=[]
			for(var i = 0; i<n; i++){
				var arr = []
				for(var j=0;j<n;j++){
					arr.push(this.rand(n))
				}; 
				arrOfArr.push(arr)
			}
			return arrOfArr
		}else{
			var arr=[]; 
			for(var i=0;i<n;i++){
				arr.push(this.rand(n))
			}; 
			return arr;
		}
		
	}
    rand(n){return eval(this.sample(['this.randStr', 'this.randInt', 'this.randObj'])+'(n, this.randMod10())')}
    // randEnc(n){return "utf8"}
    // randEncArr(n){return ['utf8']}
    randObj(n, array=false){
		//O(nlognlogn) growth complexity
		if(array){
			var objArr=[]
			for(var i=0; i<n; i++){
				objArr.push(this._randObj(n))
			}
			return objArr
		}else{
			return this._randObj(n)
		}
	};
	_randObj(n){
		var obj={}
			if(n){
				for(var i=0; i<n; i++){
					obj[this.randStr(20)]=this._randObj(n-1)
				}
			}
			return obj
	}

    randSelection(bag){
        return bag[Math.floor(Math.random() * bag.length)];
    }
    randRange(min, max){
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    genStr(len, chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'){
        //programiz.com
        var str='';
        for (var i = 0; i<len; i++){str+=chars.charAt(Math.floor(Math.random()*chars.length))}
        return str;
    }
    randMod10(){
        return Math.floor(Math.random()*(100-0+1)+0)%2
    }
	sample(arr){
		return arr[this.randRange(0, arr.length-1)]
	}
}
