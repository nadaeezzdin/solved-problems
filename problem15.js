// How many such routes are there through a 20×20 grid?
        
function factorial (num){
    if (num > 1)
        return num * factorial (num - 1);
    else 
        return 1;
            
    }
        
        
let counter =  factorial ( 2 * 20 ) / (factorial(20))**2;
console.log (counter);
    
    
     