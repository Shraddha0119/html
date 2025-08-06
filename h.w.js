                         // Mix loop nested loop question//
// let x = 6;
// x++;
// console.log(x + x);

// let a = 10, b = 20;
// console.log(a < b && b < 30);

// . Write a program using `if...else` to check if a student is pass or fail (pass if marks ≥ 40).
//  let marks=60
//  if(marks>=40){
//     console.log("pass");
//  }else{
//     console.log("Fail");
    
//  }

//  Print the sum of first 5 odd numbers using a `while` loop.
// let count=0;
// let number=1;
// let sum=0;
// while(count<5){
//     sum+=number;
//     number+=2;
//     count++;
    
// }
// console.log("the sum  5 odd  no.",sum);

// ****
// Check if a number is divisible by both 4 and 6 using a single condition
// let i=72
// if(  i%12===0){
//     console.log("The number is divisible by both 4 and 6.");
// }else{
//     console.log("th no. is not divisible by both 4 and 6");
    
// }


// Reverse a number using a `while` loop (e.g., 4321 → 1234).
// let number=4321
// reverse=0;
// while( number>0){
//     let digit=number%10;
//     reverse=reverse*10+digit
    

// }
//  console.log(reverse);

 let number = 4321;
let reversed = 0;

while (number > 0) {
  let digit = number % 10;           // Get the last digit
  reversed = reversed * 10 + digit;  // Build the reversed number
  number = Math.floor(number / 10);  // Remove the last digit
}

console.log("Reversed number is:", reversed);

