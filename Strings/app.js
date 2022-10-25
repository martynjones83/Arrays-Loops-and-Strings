// Strings

// Exercise 1 -  addFullStop

// Create a function called addFullStop​
// It should take in a string and the output should always finish with a full stop. Some of the input strings will already have a full stop and others will not.

let string1 = "This does not have a full stop"
let string2 = "This does have a full stop."
function addFullStop(string){
    if(string[string.length-1] !=="."){
        string += ".";
    }
    return string
}
console.log(addFullStop(string1));
console.log(addFullStop(string2));

// Exercise 2 - Capitalise
// Create a function called capitalize, that takes one parameter​
// The function should return "This is not a string" if the parameter passed in is not a string​
// If the parameter passed in is a string the function should return a capitalised word.​
// Examples of inputs to outputs:​
// robert => Robert​
// DAVE => Dave​
// Jenny => Jenny

let toCap = "martyn";
function capitalize(par){
    if(typeof par == "string"){
        let lower = par.toLowerCase();
        return par.charAt(0).toUpperCase() + lower.slice(1)
    }
    else {return "This is not a string"}
}
console.log(capitalize(toCap));