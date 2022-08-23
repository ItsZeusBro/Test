//What is a perfect recurrance?
//Infinite recursion (which is not necessarily a circle but can be averaged as a circle)

//what is a minimal spiral that approaches pure recurrance?
//A repetition of the original pattern with an off by one in any given direction
//So aababcabcd... or aazazyazyx...etc 
//the direction of the off by one value in for a discrete step represents the direction of the spiral

//That is the most extreme theoretical case and the foundation for recurrent pattern analysis

//when fitting a spiral we are trying to fit the largest possible spiral for the data
//or in the alternative the mean spiral between the largest and the smallest

//the largest spiral for the off-by-one patterned oredered set a-z would be
//v v  v   v    v     v      v
//aababcabcdabcdeabcdefabcdefg... etc

//the smallest spiral for the off-by-one patterend ordered set a-z would be
//                    v     v   
//aababcabcdabcdeabcdefabcdefg

//the mean spiral would be the average of the total set of all possible spirals if we were to plot these spirals on a graph

//On a set of examples with mean spirals of their own, one can take the mean spiral of the set of mean spirals

//If there is no pattern in a string of numbers or charachters then it is either removed or aggregated with the other examples
//If there is no pattern in one example and a pattern in another the one without a pattern can be discarded so long as it is 
//statistically insignificant
//if there are no patterns in the entire set of strings, then they can be aggregated and the normal distribution
//of spirals can be calculated. 
//There can be other methods for when examples are recurring (like heads or tails) but have no meaning
//outside of the frequency of their occurence relative to other examples 

class Spirals{
    constructor(){
        //
    }
}