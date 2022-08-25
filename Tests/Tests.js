import {ComparatorsTest} from "./ComparatorsTest.js"
import {RandomsTest} from "./RandomsTest.js"
import {TypesTest} from "./TypesTest.js"

class Tests{
	constructor(){
		new ComparatorsTest(2) //WHEN GENERATING RANDOM FUNCTIONS BEWARE OF COLLISIONS WHEN TESTING COMPARATORS, TODO: USE STATISTICAL ANALYSIS FOR THESE TESTS
		new RandomsTest(2)
		new TypesTest()
	}
}
new Tests()