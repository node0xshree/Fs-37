 console.log("hey");
 console.log("first");
setInterval(() => {
    console.log("Second");
}, 1000);

 console.log("third");
console.log("fourth");
  
//.then .catch ||| async and await all are asychronous

// JS prioritise to:-
//  1.synchronous:core code
//  2.Promise handlers:-.then .catch async and await comes from browsers  (async)
//  3.Normal Asynchronous:-setTimeout and SetInterval

