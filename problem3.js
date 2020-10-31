    
 // What is the largest prime factor of the number 600851475143 ?
          
        
        
        function primeFactors (num) 
        {
            for ( let i = 2 ; i <= num/i ; i++)
                {     
                   //console.log("i= "+ i + " number= " + num )
                    
                    while(num % i == 0 )
                        {
                            num= num / i ;
                            console.log("Factors= " + i );
                        }
                }
            if (num > 1 )
                 console.log("largest factor= " + num );
        
        }
       
        primeFactors(600851475143);
    
    
    
    
