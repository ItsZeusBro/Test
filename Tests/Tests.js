import {Comparators} from "./Comparators.js"
import {Random} from "./Random.js"
import {Validation} from "./Validation.js"

class Tests{
	constructor(){
		//new Comparators(2) //WHEN GENERATING RANDOM FUNCTIONS BEWARE OF COLLISIONS WHEN TESTING COMPARATORS, TODO: USE STATISTICAL ANALYSIS FOR THESE TESTS
		//new Random(2)
		new Validation()
	}
}
new Tests()