// Exercise 1 - Breakfast

// Create an Array

let breakfastArray = ['Bacon', 'Egg', 'Sausage', 'Beans', 'Mushrooms'];
console.log(breakfastArray);

// Add an item to the end

breakfastArray.push('Toast');
console.log(breakfastArray);

// Add an item to the start

breakfastArray.unshift('Black Pudding');
console.log(breakfastArray);

// Array Length

function arrayLength(arr) {
    const len = arr.length;
    return console.log(`The length of the array is ${len}`);
}
arrayLength(breakfastArray);


// Exercise 2 - Last Value

// Create a function that takes in an array as a parameter​

let footballTeams = ["Norwich" , "Leeds" , "Peterborough"];
console.log(footballTeams);

// Return the last item of the array

function lastItem(arr) {
    return arr[arr.length - 1]
}
console.log(lastItem(footballTeams));

// Exercise 3 - Music

// Create an array “musicGenres”, with items “Rock” and “Rap”.​

let musicGenres = ["Rock" , "Rap"];


// Append (add to the end) “Jazz” to the end.​

musicGenres.push("Jazz");
console.log(musicGenres);

// Replace the value in the middle of the array with “Classical”. Your code for finding the middle value should work for any arrays with an odd number of items.​

if((musicGenres.length % 2) !==0){
    musicGenres[musicGenres.length - 1 / 2] = "Classical";
}
else {musicGenres[musicGenres.length / 2] = "Classical";}

// Prepend (add to start) “Blues” and “Reggae” to the array.

musicGenres.unshift("Blues" , "Reggae");
console.log(musicGenres);

// Exercise 4 - Sort

// Create a function that takes in an array and sorts it into alphabetical order.​

let breakfastArray2 = ['Bacon', 'Egg', 'Sausage', 'Beans', 'Mushrooms' , 'Toast' , 'Black Pudding'];
console.log(breakfastArray2);

// Try sorting your breakfast array

breakfastArray2.sort();
console.log("Breakfast List sorted alphabetically => " + breakfastArray2);
