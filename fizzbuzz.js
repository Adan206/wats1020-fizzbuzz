// Place your FizzBuzz code here. 

var Rangelimit = 100;
var Responsefor3 = "Brizzle";
var Responsefor5 = "Dizzle";

// count from 1 to 20 and see if they are divisible by 5 and 3 or both 

for (i=1; i<=Rangelimit; i++) {
  
// for each number, do the following 

//see if it is divisible by 3 
  if (i%3 === 0) {
//if so: see if it's also divisible by 5 
  if (i%5 === 0) {
    
//if it is divisible by 3 and 5: print fizzbuzz
    console.log (Responsefor3+Responsefor5);
  } else {
//if it is divisble by 3: print fizz
    console.log (Responsefor3);
  }
  }

  else if (i%5 === 0) {
 //see if they divisible by 5
//if so: print buzz
    console.log (Responsefor5);
  } else {
//see if it is not divisible by 3 and 5 
//if so: print number 
    console.log(i)
  }
  

  
  
}