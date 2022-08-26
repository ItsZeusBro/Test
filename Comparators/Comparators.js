import { Types } from "../Types/Types.js"

export class Comparators{
	constructor(){
		this.types = new Types()
	}
	//COMPARATORS----------------------------------------------------

	isEqual(thing1, thing2, equal=[true]){
		if(!equal[0]){
			return false
		}else{
			if(this.types.isNullType(thing1)&&this.types.isNullType(thing2)){
				return this._isEqualNullType(thing1, thing2, equal)
			}
			else if(this.types.isInteger(thing1) && this.types.isInteger(thing2)){
				return this._isEqualNumber(thing1, thing2, equal)

			}else if(this.types.isString(thing1)&&this.types.isString(thing2)){
				return this._isEqualString(thing1, thing2, equal)

			}else if(this.types.isObject(thing1)&&this.types.isObject(thing2)){
				return this._isEqualObject(thing1, thing2, equal)

			}else if(this.types.isArray(thing1) && this.types.isArray(thing2)){
				return this._isEqualArray(thing1, thing2, equal)

			}else if(this.types.isStrata(thing1)&&this.types.isStrata(thing2)){
				return this._isEqualStrata(thing1, thing2, equal)

			}else if(!thing1 && !thing2){
				return false
			}else{
				equal[0]=false
				return false
			}
		}
	}

	_isEqualNullType(thing1, thing2, equal=[true]){
		if(this.types.isNullType(thing1)&&this.types.isNullType(thing2)){
			if(typeof thing1 === typeof thing2){
				return equal[0]
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

	_isEqualObject(obj1, obj2, equal=[true]){
		//assuming they are both objects, the keys should be equal arrays
		if(
			obj1
			&&
			obj2
			&&
			this.types.isObject(obj1)
			&&
			this.types.isObject(obj2)
			&&
			(Object.keys(obj1).length == Object.keys(obj2).length)
		){
			if(this._isEqualArray(Object.keys(obj1), Object.keys(obj2))){
				for(var i =0; i<Object.keys(obj1).length; i++){
					var key = Object.keys(obj1)[i]
					if(this.isEqual(obj1[key], obj2[key])){
						return equal[0]
					}else{
						equal[0]=false
						return false
					}
				}
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

	_isEqualString(str1, str2, equal=[true]){
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

	_isEqualNumber(num1, num2, equal=[true]){
		if(this.types.isInteger(num1)&&this.types.isInteger(num2)){
			if(num1==num2){
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

	_isEqualArray(arr1, arr2, equal=[true]){
		if(this.types.isArray(arr1) && this.types.isArray(arr2)&& (arr1.length == arr2.length)){
			for(var i=0; i<arr1.length; i++){
				if(!this.isEqual(arr1[i], arr2[i])){
					equal[0]
					return false
				}
			}
		}else{
			equal[0]=false
			return false
		}
		return equal[0]
	}

	_isEqualStrata(strata1, strata2, equal=[true]){

	}


	//The problem with equality recursive functions:
	//if everything is assumed true and proven false, you may have edge cases that turn out to be true when they are not
	//if everything is assumed false and proven true, and you use the same reference variable for reporting true, 
	//then if one deep thing is true, it might slip through and be generalized upon
	//if you dont use a reference variable, you cant report on the whole state across recursive functions and levels of recursivity
	//but if you dont use a reference variable, its safer to assume false and prove true, but your recursion has to be perfect all the time
	//we choose to assume true, because its easy to short circuit a recursive function upon its falsehood as the first
	//statement of all equality recursive functions

}

