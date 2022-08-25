import {ComparatorsTest} from "./ComparatorsTest.js"
import {RandomTest} from "./RandomTest.js"
import {TypesTest} from "./TypesTest.js"

class Tests{
	constructor(){
		new ComparatorsTest(2) //WHEN GENERATING RANDOM FUNCTIONS BEWARE OF COLLISIONS WHEN TESTING COMPARATORS, TODO: USE STATISTICAL ANALYSIS FOR THESE TESTS
		new RandomTest(2)
		new TypesTest()
	}
}
new Tests()