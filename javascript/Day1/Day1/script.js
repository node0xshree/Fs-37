
// ES2026 is the latest version of JS
/*var a=10;

var name="bapu";

console.log(a);

console.error("This is an error message");

console.warn("This is a warning message");*/

//variables
//var-normal,ye higher authority wala hai,global scope me bhi use ho sakta hai
//let-normal,ye lower authority wala hai,block scope me use hota hai
//const-constant,ye bhi lower authority wala hai,block scope me use hota hai,iske value ko change nahi kar sakte

/* var a=10;    //assignment operator"="
a=30;       //updation of variable
var a=50;  //it don't provide error because var is global scope variable but not in let and const

let b=20;


const c=30; */

/*don't keep constant variable only doing declaration
 without assignment value because it will give error*/

 /*if u don't assign value to variable js gives undefined value 
  to that variable but in case of const it will give error because
 const is constant variable and it should have value at the time of declaration*/

 /*javascript is synchronous programming language,it executes code line by line,
  if any line has error then it will not execute the next lines of code */
  

 /* let amount=20000;

 console.log(amount);

 amount=30000;

 console.log(amount); */

 /*JavaScript is behaves like asynchronous 

  //Two types of data types in javascript:-

  //1.Primitive:-

  //1.String-""/''
  //2.Number-4778752
  //3.Boolean-true/false
  //4.BigInt-6546545424245n
  //5.Undefined-undefined
  //6.Null-empty value
  //7.Symbol-Symbol()
  //8.NaN-Not a Number

  //2.Non-Primitive/Reference:-

  //1.Arrays:[] //heterogenous type of array (key+values)
  //2.Objects:{key:value}
  //3.Functions:() => {} //Functions are the reusable block of code.we can execute and call by own requirement

    let books=["JavaScript","Python","Java","C++",null,true,undefined,NaN,89];

    let person={

        name:"Bapu",
        age:22,
        city:"Pune";
    
    }

    let add=(a,b)=>{
        return a+b;
    }

    //in javascript 90% time u get the objects but actually it is 
    // arrays as data type because it is a object oriented programming language
    //+ only do addition and concatinition
    //coergation
    
/* function greet(a,b,c){     //a,b,c are parameters
    console.log("Hey I am developer");
    console.log("Good Evening");
    console.log("welcome to our enviornment");
}
//It smoothly run without semicolon becoz it is flexible.
greet()
greet()
greet()
greet()
greet()
greet()



function sum(num1,num2){   
    console.log(num1+num2)
}
sum(45,90)     //45 and 90 are arguments here
sum(46,89)
sum(33)   //Nan becoz we don't pass the value

function remainder(num1,num2){
    console.log(num1%num2)

}

remainder(4,2)
remainder(78,2)
remainder(23)*/

//There are three types of function before es6:-

//1.Function Statement/Declaration
//function sum(){}
//2.Function Expression
//let sum =function(){}
//3.Anonymous Function
//function(){}

//Arrow Function

//1.Fat Arrow Function
 //let arrow = () => {} 
//2.Fat Arrow with implicit return   //implicit=spontaneous/quick for one operation
/*let sum=(a,b) => a+b;
let ans=sum(100,100);

sum();
console.log(ans);*/

//3.Fat Arrow with implicit return with one parameter

//return Keyword;  to break the code it will run inside the function

//Operators:-

//1.Arithmetic:  (+,/,-,%,*,**)      (+ do concarigation and addition)


//2.Logical:     (&&,||,!)

// && says both the values are true then if returns  
//only returns last value  
//agr pehle hi falsy value mili toh aage nhi jayega
//agr pehle pe true mila toh aage jayega

// || says if one value is true then if returns    
//  //agr pehle hi true mil gya toh aage nhi jayega

// ! make the opposite of value

//truthy value

//falsy value-> null undefined false 0 0n NaN document.all "" 

//Control Statements

/*if(false){
    console.log("hey good day..");
}
else{ 
    console.log("bad day..");
}*/


//3.Assignment: right wali value ko left mein assign kar dete hai
//= += -= /= *=
 

//4.Comparison:always return boolean value
//== only light checking values 
//=== strict checking data types 
//<
//>
//<=
//>=
//!=0                       
//!==

/*let a= !null|| 10;
console.log(a);*/

//5.Ternary: (short hand)

/* if(34){
     console.log("true condition");
 }
 else{
    console.log("false condition")
}*/

// 34?console.log("true condition"):console.log("false condition");   //? ke pehle logic rehta hai ? ke baad if : ke baad else

    // let age=Number(prompt("What's your choice"));
    // console.log(choice);

//alert("chshbfjfn"); //only give msg not take input

/*
let age=Number(prompt("Enter your age"));// but in prompt u take input
console.log(age);

age<18?console.log("Not eligible")(age<=18?console.log("elig"):console.log("Bad day")):console.log("Bad day");
*/



console.log("Hello");
console.warn("Samajh ja");
console.error("not exists");
console.table([]);