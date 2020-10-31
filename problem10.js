// Find the sum of all the primes below two million.
     
let sum= 2, n = 3;

while ( n < 2000000){

  let count=0;
  for ( var i= 2 ; i <= n ; i++ ){
                        
    if ( n % i == 0 && i < n ){
      break;
     //console.log ("num: " + n);
    }
    else if ( i > (Math.sqrt(n)+2)){
      sum += n;
     // console.log ("num: " + n);
     break;
    }

    else if ( n % i == 0 && n == i ){ 
     //console.log ("num: " + n);
      sum += n;
    }
 }
            
n = n + 2 ;

}
    
console.log ("sum: " + sum );   
    

  