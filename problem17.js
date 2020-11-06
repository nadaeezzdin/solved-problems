// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


let basicNum = [ 0, 'one'.length, 'two'.length, 'three'.length, 'four'.length, 'five'.length, 'six'.length, 'seven'.length, 'eight'.length, 'nine'.length, 'ten'.length, 'eleven'.length, 'twelve'.length ,'thirteen'.length, 'fourteen'.length, 'fifteen'.length, 'sixteen'.length, 'seventeen'.length, 'eighteen'.length, 'nineteen'.length ]
let tenth = [ 0 , 0 , 'twenty'.length, 'thirty'.length, 'forty'.length, 'fifty'.length, 'sixty'.length, 'seventy'.length, 'eighty'.length , 'ninety'.length ]
        
    
    
function belowHundred(n) {
    if (n < 20) 
        return basicNum[n]
        
    else
       //(n/10 - n % 10)
        return tenth[Math.floor(n/10)] + basicNum[n % 10];
}
    
function getLength (n) {
    let sum = 0 ;
    if (n < 100) { return sum += belowHundred(n);  }
        
    if (n % 100 === 0)
       { return sum += (basicNum [n / 100] + 'Hundred'.length); }
       
    if (n > 100 && n < 1000)
        { return sum += basicNum[ Math.floor(n/100) ] + 'andHundred'.length + belowHundred(n % 100); }
  
    if ( n % 1000 === 0)
        { return sum += (basicNum [n / 1000] + 'thousand'.length); }
                          
    }
    
let totalSum= 0
for (let i = 0; i <= 1000 ; i++) {
    totalSum += getLength(i);
}
console.log (totalSum);
    
