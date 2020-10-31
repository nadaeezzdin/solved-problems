//There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.
        
let c = 0 ;    
for (let a = 3 ; a < 1000 ; a++ ){
    for (var b = a + 1  ; b < 1000 ; b++){

        c =( a**2)+(b**2);
        c = Math.sqrt(c)
        if ( a + b + c === 1000 ){

            console.log( "Numbers: " + a + " " + b + " " + c);
            console.log ("product= " + (a * b * c)) ;
            break;
                
        }
    }
 }
            
        
    

    
        
  