
// =================================================
//  1-100 পর্যন্ত কোন সংখ্যা গুলো 3, 5 এবং 3 ও 5 দ্বারা
//  বিভাজ্য তা নির্ণয় করা যায় ।।
// =================================================

function fizzBuzz(numbers){
    for(let i = 1; i <= numbers; i++){
        if(i % 15 === 0){
            console.log(`${i} is FizFuzz !`);
        }
        else if(i % 3 === 0){
            console.log(`${i} is Fizz !`);
        }
        else if(i % 5 === 0){
            console.log(`${i} is Fuzz !`);
        }
        else{
            console.log(i);
        }
        
    };
    
    
};
fizzBuzz(100);