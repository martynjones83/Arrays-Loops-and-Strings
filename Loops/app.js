// Loops

// Exercise 1 - Counting

// Use a for loop to log the numbers 1- 10.​

for(i = 1; i <=10; i++){
    console.log(i)
}

// Modify the for loop so that it counts down from 10 to 1.

let y = 10;
for(j = 1; j <=10; j++){
    console.log(y);
    y--;
}

// Exercise 2 - Tasks

// Create an array, called tasks, of 3 or more household tasks you need to do.​

let tasks = ["Cook" , "Dust" , "Laundry" , "Vacuum"];
console.log(tasks);

// Use a for loop and template literals to iterate through the array printing `Task ${I+1}: ${tasks[i]}` for each element on the array.

for(i=0; i<tasks.length; i++){
    console.log(`Task ${i+1}: ${tasks[i]}`);
}

// Exercise 3 - Last Loop Value

//Which value is the last to be alerted in this code?​

// let i = 3;​

// ​

// while (i) {​

// alert( i-- );​

// }

let i = 3;

alert(i--); // shows 3, decreases i to 2

alert(i--) // shows 2, decreases i to 1

alert(i--) // shows 1, decreases i to 0

// done, while(i) check stops the loop - answer is 1?


// Exercise 4 - Even Numbers

// Use a for loop to output even numbers from “2” to “10”.

for(i=2; i<=10; i++){
    if((i%2)===0){
        console.log(i);
    }
}

// Exercise 5 - Replace "for"

// Rewrite the code below, changing the “for” loop to a “while” loop without altering the behaviour of the loop.​

// for ( let x = 0; x < 3; x++ ) {​

let x = 0;
while(x<3){
    console.log(x);
    x++;
}

//   alert( `number ${x}!` );​
    
let numbers = [];
for(i=1; i<=3; i++){
    numbers[i-1] = i;
}

// Exercise 6 - Sum

// Write a function “sumInput()” that:​
// Take in an array of numbers as a parameter​
// Returns the sum of the numbers​
// Try modifying the function so it returns the average

function sumInput(arr){
    let sum = 0;
    for(i=1; i<=arr.length; i++){
        sum += arr[i-1];
    }
    sum /= arr.length; 
}
console.log(sumInput(numbers));

