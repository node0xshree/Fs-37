//"Basics":-

//1.
 
/*let name='Suhani Gupta';
let age= 20 ;
console.log(`my name is ${name} and my age is ${20}`);  //back tags  this whole process called template literal*/
 
//2.
/*
let a=10;
let b=3;
let c =a+b;
console.log(c);
let d=a-b;
console.log(d);
let e=a%b;
console.log(e);
let f=a/b;
console.log(f);
let g=a*b;
console.log(g);*/

//3.

/*let x=5;
let y=8;
console.log(x,y);
let temp;
temp=x;
x=y;
y=temp;
console.log(`value of x after swapping are ${x},${y}`);*/

//4.

//convert temperature from celsius to fahrenheit:-

 /*let celsius=37;
let F=(celsius*9/5)+32;
//convert temperature from celsius to fahrenheit
console.log(`The Fahrenheit temperature is ${F}`);*/

//5.

/* let length=12;
let width=7;
let area=length*width;
console.log(`The Area of Rectangle is ${area}`);
let perimeter=2*(length+width);
console.log(`The Perimeter of a rectangle is ${perimeter}`);
*/


//Conditions:-

//6.

/*let number=Number(prompt("Enter your number"));// but in prompt u take input
console.log(number);

number<0?console.log("Number is negative"):number===0?console.log("zero"):console.log("Number is positive");*/

//7.
 
/* let number=Number(prompt("Enter the number"));
 console.log(number);
 number%2==0?console.log("Number is even")(number%2==1?console.log("Number is odd "):console.log("Invalid Output")):console.log("Invalid Output");   
 //equals to check data type and value as well */

 //8.

 /* let a=9;
 let b=25;
 let c=34;
 if(a&&b&&c){
    console.log('The largest number is '+(a&&b&&c));
 }*/

//9.

/* let Marks=Number(prompt("Enter your marks"));
console.log(Marks);
let totalmarks=100;
if(Marks>90) {
    console.log("Grade is A");
}
else if(Marks>=75 && Marks>=89){
    console.log("Grade is B");

}
else if(Marks>=50 && Marks>=74){
    console.log("Grade is C");

}
else{
    console.log("Fail");
} */

//10.
//Printing Days

    /*let day=7;
    switch(){

    case 1:
    if(1==Monday){
        console.log("Monday");

    }
    break;
    case 2:

    if(2==Tuesday){
        console.log("Tuesday");

    }   
    break; 
    case 3:

    if(3==Wednesday){
        console.log("Wednesday");

    }
    break;

    case 4:

    if(4==Thursday){
        console.log("Thursday");

    }
    break;

    case 5:

    if(5==Friday){
        console.log("Friday");

    }
    break;
    case 6:

    if(6==Saturday){
        console.log("Saturday");

    }
    default:
        console.log("Invalid Output")
    
    
   
}*/

//For Loops

//11.
//printing numbers

/* for(let i=1;i<=10;i++){
 console.log(i);
}*/            

 
//12.
 
/* for(let i=10;i>=1;i--){
     console.log(i);
 }*/

//13.
//for even no.s from 1 to 50


/* let num=Number(prompt('enter a number'));

 for(let i=0;i<=num;i++){
    if(i%2===0){
    console.log(i);
    }
}*/

//14.
/* let n=Number(prompt('enter the value of n '));
for(let i=1;i<=10;i++){
    console.log(`${n} × ${i} = ${n*i}`);
}*/

//

//15.
//Sum of n numbers

/*let n=Number(prompt('enter the value of n '));
let sum=n *(n + 1)/2;
for(i=1;i<=n;i++){
 console.log(`current number:${i}`)
}
    console.log(`${sum}`);*/


//16.
//Sum of only the odd no.s
/* let n=Number(prompt('enter the value of n '));

let sum=0;
for(let i=1;i<=100;i=i+2);
 sum +=i;
 console.log(`${sum}`); */

 //17.
 //Square of numbers from 1-10
 
/* for( let i=1;i<=10;i++){
     n=(i*i);
    console.log(`${i}*${i}=${n}`);

}*/

//18.
//numbers between 1 and 100 that are divisible by both 3 and 5


 /* for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    
    console.log(i);
   }
    }*/
 
//19.
//numbers between 1 and 100 are divisible by 7, and print the count
 /* for (let i = 1; i <= 100; i++) {

  if (i % 7 === 0) {
   
    console.log(i);
   }
    }*/


 //20.
 // whether a given number is prime (only divisible by 1 and itself) using a for loop.
/*let n = Number(prompt('Enter the number'));
let isPrime = n > 1;
for (let i = 2; i < n; i++) {
if (n % i == 0) {
    isPrime = false;
}

if (isPrime) {
    console.log(n + ' is prime');
}
else {
    console.log(n + ' is not prime');
}

}*/




//Conditions...:-

//1.

/* let a=Number(prompt(" Enter the value of a"));
let b=Number(prompt(" Enter the value of b "));

if(a>b){
   console.log("a is greater");
}

else if (a===b){
    console.log("a and b both are equal");

}

else {
        console.log("b is greater");
}*/

//2.
/* let num=Number(prompt("Enter a number:"));
if ((num%5 ===0) && (num%3==0)){
    console.log(num+"is divisble by both 3 and 5 ");

}
else if(num%5 === 0){
    console.log(num+"is divisible by 5");
}
else if (num%3 === 0){
    console.log(num+"is divisible by 3");
    
}
else{
    console.log(num+"is neither divisible by 3 and 5");

}*/

//3.

/* let age=Number(prompt("Enter your age:"));
if (age < 13){
    console.log(age+  " Child ");

}
else if(age >=13 && age <=19){
    console.log(age+  " Teenager");
}
else if (age >=20 && age<=59){
    console.log(age+ " Adult");
    
}
else if (age >= 60){
    console.log(age+ " Senior");
    
}

else{
    console.log("invalid output");

} */

    //4.

    /* let year=Number(prompt("Enter the Year"));
    if (year %4===0){
        console.log(year+"It is a Leap year");

    }
    else{
        console.log(year+"is a century year");
    } */

    //5.
    let a =Number(prompt("Enter the value of a "));
     let b =Number(prompt("Enter the value of b "));
      let c =Number(prompt("Enter the value of c "));

    
