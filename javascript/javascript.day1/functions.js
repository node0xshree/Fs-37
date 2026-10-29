//1.
/* const fact =(n) =>{
    if (n===1){
        return 1;
    }
    return n*fact(n-1);
}
console.log(fact(8));  */


//2.
/* const fibonacci =(n) =>{
    if (n<=1)return 1;
    
    return fibonacci(n-1)+fibonacci(n-2);
    }
    console.log(fibonacci(4)); */
  
    //3.
   /*  const findPower =(a,b) =>{
     return a**b;  //exponential operator   ;
    }
    console.log(findPower(2,3));
    console.log(findPower(4,5));
    console.log(findPower(4,2));
    console.log(findPower(6,3));

    */
   //4.
  /* //IIFE logic inside the local scope
   (function() {  
   console.log("Executed");
   }) (); */

    //5.
    // like "Pehli baar jab computer factorial calculate karega, toh woh answer ko ek 'notebook' (cache) mein save kar lega.
    //Agli baar jab hum same number maangenge, toh woh calculation chhod kar seedha notebook(cache ) se dekh kar answer de dega."

     /* function memoiseFactorial (){
        const cache ={};
        return function fact(n) {
            if (n in cache){
                return cache [n];
            }
            if (n===0 || n ===1) {
                return 1;
            }
            cache[n]=n* fact(n-1);
            return cache[n];
        };
     }
     const factorial =memoiseFactorial();
     console.log(factorial(4));
     console.log(factorial(5));
     console.log(factorial(6));
     // Returned from cache
     console.log(factorial(6)); */

     //6.
     //"Closure counter ek aisa function hai jo 
     // apne andar ek secret number ko hamesha ke liye yaad 
     // rakhta hai aur har click par usme +1 karta jata hai."

     /* function createCounter (){
        let count =0; //secret no.
        return function (){  
            count ++;   //increment
            return count ;
        };
     }
     const button =createCounter();
     console.log(button());
     console.log(button());
     console.log(button());
     console.log(button()); */
     
     //7.
     //Currying means to break the fuction which takes arguments one by one instead all together.
     /* function sum (a){
        return function(b){
        return a + b;
     
     };
    }
     console.log(sum(4)(8)); */

    //8.
      /* function  debounce(func,delay){
        let timer;
        return function (...args ){
            clearTimeout(timer);  // cancel the previous timer
            timer =setTimeout(( )=> {
            func.apply(this, args);     
            },delay); //
        };
        }
       const search = debounce((text) => {
       console.log("Searching for:", text);
       }, 500);

       search("l");
       search("la");
       search("lap"); 
       */


       //<---Don't Catch the 9. question --->

    //10.
    /* function once(func){
        let called =false;
        return function (){
            if (called) return;
            called =true;
            func();

        };
    }
    const sayHi = once(() => console.log("Namaste Bhopal!"));

sayHi();   // runs once: "Namaste Bhopal!"
sayHi();   // ignored
sayHi();   //ignored
     */
//11.
// Make an empty array result.
// Loop through each item and push the callback’s answer.
// return result.
 
/* function map(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

// Test
console.log(map([1, 2, 3], (x) => x * 2));   // [2, 4, 6] */