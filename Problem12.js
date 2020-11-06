//What is the value of the first triangle number to have over five hundred divisors?

let num, factors=0, count= 0 , i = 1;
        
while (i < 10000000){
    num = (i * (i + 1))/2 
     //  console.log(num);
    for (var j = 1 ; j <= Math.sqrt(num)+2 ; j++){
                       
        if (num % j == 0){
            factors= j;
            //console.log("fac: "+ factors);
             count ++ ; 
      }
                      
    }         
                      
    if ( count >= 250 ){
        console.log(num);
        break; }
    else
        count =0;
    i++;
                
 }
      
               
                 
            
         
        
    
    
    
    
    
    
    
    
    
    
    
    
    