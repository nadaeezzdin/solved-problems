

let count=1, Maxcount=0, NNN=0, MaxNum=0;
for (var num= 2 ; num < 1000000 ; num ++){    
    NNN = num;
    while ( NNN > 1 ){
        if ( NNN % 2 == 0){  NNN = NNN / 2; }    
                         
        else  { NNN = (3 * NNN)+1; }   
    count ++; 
    }
                 
    if ( count > Maxcount){
        Maxcount = count;
        MaxNum=num;
    }
                 
                
    count = 1 ;
                 
}
console.log (MaxNum + " " + Maxcount);
        