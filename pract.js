// let a = 5, b = 2;
// console.log(a * b + b);




// ****
// let x = 6;
// x++;
// console.log(x + x);


// *****
// . Write a program to calculate the factorial of a number using a `while` loop.
// let n=5
// let fact;
// let i=4
// while(fact*i){
//     console.log(fact); 
//     fact*=i
//     i++;  
// }

                                                // ******//


// for( i=1;i<=10;i++){
//     console.log(i);
    
// }

// . Print even numbers from 1 to 20.

// for( let i=2;i<=10;i++){
//     if(i%2===0){
//         console.log(i);
        
//     }

// }


// . Print odd numbers from 1 to 20.
// for( let a=1;a<=20;a++){
//     if(a%2!==0){
//         console.log(a);
        
//     }
// }


// . Print numbers from 10 to 1 using a for loop.

// for( let x=10;x>=1;--x){
//     console.log(x);  
// }


// Find the sum of numbers from 1 to 100.
// let sum=0
// for(let m=1; m<=100;m++){
// sum+=m
// }
// console.log("Sum from 1 to 100 is:", sum);





// . Find the factorial of a number using a loop (e.g. 5! = 120).
// let number=5;
// let factorial=1;
// for(let k=1;k<=number;k++){
// factorial*=k;
// console.log(`Factorial of ${number} is:`, factorial);

// }

// k=1;1<=5; 1*1;fact=1 k++
// k=2;2<=5;1*2;fact=2
// k=3;3<=5;2*3;fact=6
// k=4;4<=5:6*4;fact=24
// k=5;5<=5;24*5;fact=120


// ******

// . Count how many numbers between 1 to 50 are divisible by 3.

// let Count=0;
// for(let i=1;i<=50;i++){
//   if(i%3===0){
//     Count++;
//   }
    
// }
// console.log("count of the number divisible by 3 between 1 and  50:",Count);




// i=1;1<=50;i++; 1%3===0
// i=2;2<=50;i++;2%3===0

// ******
// Print the multiplication table of 5 (like 5x1 = 5, … 5x10 = 50).


// let number = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log('${number} x ${i} = ${number*i}');
// }


// let number = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }


// ******
// Print all multiples of 7 between 1 and 100.
// let count=0
// for( let i=1;i<=100; i++){
//   if(i%7===0){
//   count++
// }

// }
// console.log( "count  of the number divisible by 7 between 1 to 100:",count);



// *****
// Take a number and print its reverse (e.g. 123 → 321).

// let num=123
// let rev=0
// for(let num=123;num>0;num=Math.floor(num/10)){
//     let digit=num%10;
//     rev=rev*10+digit
//     console.log(rev);
// }

// num=123;123>0;123=123/10


// *****
// Print the square of numbers from 1 to 10.


// for (let i = 1; i <= 10; i++) {
//   console.log(`Square of ${i} is ${i * i}`);
// }

// *****
// Calculate the sum of digits of a number (e.g. 123 → 6).
// let num=123;
// let sum=0;
// while(num>0){
//   sum+=num%10;
//   num=Math .floor(num/10);
// }
// console.log("sum of the digits:",sum);

// num=123;123>0;123/10=digit3;  m.f=num/10=12
// num=12;12>0; 12/10=digit2;;  m.f=12/10=1
// num=1;1>0;1/10=1 digit1; m.f=1/10=0



// ******
// Print all numbers from 1 to 50 that are divisible by both 2 and 3.




// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }


// ******
// . Print the first 10 natural numbers using a `while` loop.
// let i=1
// while(i<=10){
//   console.log(i);
//   i++;
// }