    
    // By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
        
let x = 0, y = 1, result = 1, sum =0 ;
       
for(let i = 1; i < 100; i++){
    if (result >= 4000000)
    break;
    else {
    //console.log(" result: " + result);
    result = x +  y;
    x = y;
    y= result;
            
    if ( result % 2 == 0 )
       sum += result;
                      
    }
                               
}
console.log("sum: " + sum);
    
    
