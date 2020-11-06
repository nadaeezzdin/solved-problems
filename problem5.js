// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20

let i=1;
for (let k = 1 ; k <= 20; k++ ){
    if ( (i % k) > 0){
        for (let j = 1 ; j <= 20 ; j++){
            if(((i * j) % k ) == 0 ){
                i *= j;
                break;
            }
        }
    }
}
console.log(i)