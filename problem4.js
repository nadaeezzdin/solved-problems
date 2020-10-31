    
    //Find the largest palindrome made from the product of two 3-digit numbers
        
       
 
        
    let prod= 0,result, arr=[];  
        for( let i = 999 ; i >= 100  ; i-- )
        {
            for ( var j = 999 ; j >= 100 ; j--) {
                prod = i * j ;   
                result = reverseNumber(prod);
                arr.push(result);
            }
                    
        }
    arr.sort((a,b) => b-a)
    console.log("Max palindrome number= " + arr[0])


      function reverseNumber(n) 
        {
            
            n = n + "";
           if (n.length >= 6){

	       let reversed =  n.split("").reverse().join("");
           if (reversed == n ) 
                {
                    return n
                }

            }
        
        }

        
    
       
    
   