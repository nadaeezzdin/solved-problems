
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum
     
let sum1=0, sum2=0;
     
for ( let i= 1 ; i <= 100 ; i++ ){
    let result1= Math.pow(i,2)
    sum1 += result1 ;
                 
    }
console.log("sum of squares: " + sum1);
for ( let j = 1; j <= 100 ; j++ ){
    sum2 += j;
}
let result2 = Math.pow(sum2,2);
console.log("square of the sum: " + result2);
let diff=  result2 - sum1;
console.log ("the difference = " + diff );
    
    
    