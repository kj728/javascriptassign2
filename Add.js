
function addNumbers(...passedArguments) {
    //check if there are any arguments passed.
    if (passedArguments.length == 0) {
        return 0; 
    } else {
      
        let sum = 0;
        for (var i = 0; i < passedArguments.length; i++) {
            //check if the argument is a string. If it is, set it to 0.
            if (typeof passedArguments[i] === "string") {
                passedArguments[i] = 0;
            }
            //add the numbers
            sum += passedArguments[i];
        }
       
        //return the sum.
        return sum;
    }
}
console.log("Result: " + addNumbers(1, 2, "a", "%", ));



