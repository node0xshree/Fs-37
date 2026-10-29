//Arrays practice:-
   //1.
/*let tasks=["wake up","Study","Exercise"]
  tasks.push("sleep")
  console.log(tasks);
  console.log(tasks.length) */

  //2.
   /* let tasks=["wake up","Study","Exercise"]
   tasks.pop("Exercise")
   console.log(tasks);
   console.log(tasks.length) */

   //3.

   /* let queue =["Aman","Riya","Karan"]
   queue.unshift("Sneha")
   console.log(queue);*/
   
   //4.

   /* let queue=["Aman","Riya","Karan"]
   
   console.log(queue.shift())
   console.log(queue); */

   //5.
    /*let songs=["songA","SongB","SongC","songD"]
   songs.reverse(songs)
   console.log(songs);*/

   //without using reverse keyword
   /* let songs = ["songA","SongB","SongC","songD"];
   for(let i = songs.length -1 ; i>=0; i--){
    console.log(songs[i]);
   } */

    //6.
   /* let fruits=["apple","mango","banana","mango","grapes"];
    
    console.log(fruits.indexOf("mango"));
    console.log(fruits.lastIndexOf("mango"));  */

    //7.
    /* let students=["Apple","Riya","Karan"];

    let searchName=prompt("Enter a student's name:")
    if(students.includes(searchName)){
    console.log("Present");
    }
    else{
    console.log("Absent");
    } */

    /* //8.

    let items=["Milk","Bread","Eggs","Butter"];
    
    console.log(items.join(","));
    console.log(items.join("-"));
     */

    //9.
    /* let scores=[10,20,30,40,50,60];
       scores.slice(0,3)
       console.log(scores.slice(0,3));
       scores.slice(3,6)
       console.log(scores.slice(3,6));
       console.log(scores); */
   
    //10.
    /* let colors=["red","blue","green","yellow","black"]
    colors.splice(2,1,"pink");
        console.log(colors);*/

    //11.
    
   /* let classA=["Aman","Riya"];
    let classB=["Karan","Sneha"];
    let combine=classA.concat(classB);
    console.log(combine);    
    console.log(classA.concat(classB).length); */

    //12.

      /*let names=["Rohit","Aman","Sneha","Karan","Riya"]
    names.sort();
    console.log(names);

     //Lowest to highest

     let prices=[450,99,1200,300,75] ;
     prices.sort((a,b)=> a-b);
     console.log(prices);

     //Highest to lowest
     prices.sort((a,b)=> b-a);
     console.log(prices);*/


    
     //13.
 /*     let prices=[200, 450, 999] ;
      console.log(prices);

      let prices1=prices.map(price =>`₹${price}`);
      console.log(prices1);
      
       let prices2=prices.map(price =>`${price * 1.18}`);
      console.log(prices2);
*/
      
    //14.
    /*let marks = [72, 85, 90, 64, 58];
    console.log(marks[0]);
    console.log(marks[marks.length-1]);
   console.log( marks[Math.floor(marks.length / 2)]);*/

   //15.
   //for loop
   /*for (let i = 0; i < cart.length; i++) {
    console.log((i + 1) + ". " + cart[i]);
}
    // Using forEach
   let cart = ["Shoes", "T-shirt", "Cap"];
   cart.forEach((item, index) => {
    console.log((index + 1) + ". " + item);
});*/

   //16.
   /*let cartPrices = [499, 1299, 250, 799, 150];
   let total = 0;

   for (let i = 0; i < cartPrices.length; i++) {
    total = total + cartPrices[i];
   }

   console.log("Total bill:", total);
   console.log("After discount:", total * 0.9);*/

   //17.
   /*let marks = [78, 92, 45, 66, 88, 35, 71];

   let highest = marks[0];
   let lowest = marks[0];
   let total = 0;

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }

    if (marks[i] < lowest) {
        lowest = marks[i];
    }

    total = total + marks[i];
 }

console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", total / marks.length);*/

//18.

/* let numbers = [12, 7, 9, 20, 33, 18, 5, 40];

let even = 0;
let odd = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log("Even:", even);
console.log("Odd:", odd);*/

//19.

/* let votes = ["Aman", "Riya", "Aman", "Karan", "Riya", "Aman"];

let count = {};

for (let i = 0; i < votes.length; i++) {
    let name = votes[i];

    if (count[name]) {
        count[name]++;
    } else {
        count[name] = 1;
    }
}

console.log(count);

let winner = "";
let maxVotes = 0;

for (let name in count) {
    if (count[name] > maxVotes) {
        maxVotes = count[name];
        winner = name;
    }
}

console.log("Winner:", winner);
console.log("Votes:", maxVotes);*/

//20.

/* let cities = ["Bhopal", "Indore", "Bhopal", "Delhi", "Indore", "Pune"];

let uniqueCities = [];

for (let i = 0; i < cities.length; i++) {
    if (!uniqueCities.includes(cities[i])) {
        uniqueCities.push(cities[i]);
    }
}

console.log(uniqueCities);
console.log("Unique cities:", uniqueCities.length);*/



 const students = [
 { id: 1, name: "Aman",   city: "Bhopal", marks: 85, },
  { id: 2, name: "Priya",  city: "Indore", marks: 32 },
  { id: 3, name: "Rohit",  city: "Bhopal", marks: 67 },
  { id: 4, name: "Sneha",  city: "Jabalpur", marks: 91},
  { id: 5, name: "Karan",  city: "Indore", marks: 38},
];

const products = [
  { id: 1, name: "iPhone 15",     price: 79999, inStock: true  },
  { id: 2, name: "Boat Airdopes", price: 1499,  inStock: true  },
 { id: 3, name: "MacBook Air",   price: 99999, inStock: false },
 { id: 4, name: "Redmi Note 13", price: 14999, inStock: true  },
 ];
  
 /* //1.
 let ans=students.map((val) => {        //map is a higher order function
return`${val.name} from ${val.city} scored ${val.marks}`;

 });
 console.log(ans);

 //2.
let ans= students.map((val) => {
val.marks >=40 ? (val.result="Pass"):(val.result="Fail") ;

    if(val.marks >=40){
    val.result="pass"
 }
 else{
    val.result="fail"
 }
 return(val);

  });
  console.log(ans);

  //3.
  let ans =students.filter((val) => {
   
    return val.marks >=40;
    
  });
console.log(ans);
  
 //4.
  let ans =products.filter((val) => {
    if(val.inStock ===true && val.price <20000){
    return val;
    }
  });
console.log(ans);

 //5.
 let ans =students.find((val) => {
   
    return val.marks<40;
    
  });
console.log(ans);

//6.
let ans=students.filter((val) => {        
 if (val.city ==="Bhopal"&& val.marks >40 )
    return val;
  });
  console.log(ans); */

  let result=students.map((val) => {

  });