//DOM (Document Object Model) is a Tree-like structured representation of a web page ,manipulates html and css.

// that allows developers to access, modify, and control its content

//  and structure using JavaScript. It powers most dynamic website interactions(browser)

//Dom is the bridge between html+css and JavaScript
   
//React:frontend library
//NodeJs:Run-time environment
//NextJs:Full stack framework

//Browser is one of the thing allows websites to perform all the tasks and operations
//Browser:
// 1.HTML Parser 
// 2.CSS Parser
 
//JS 1.(String)->
//2.Html Parser->
//3.Tokens(chunks)->
//4.Dom(Tree-like Structure)->Dom Tree
//Html=Dom Tree
//Css=Cssom Tree
//Dom Tree+Cssom Tree=Render Tree

// 

// let h1 =document.querySelector("h1");

// let img=document.querySelector("img");

// let imgSrc =img.getAttribute("src");

// let changesImg = img.setAttribute(
//     "src",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WDmFyV1HvNZ26BrAJjNbtVV_oudWpSLmLAPZrMShNSEyym6zq-55afDuMTxRGVqRrtTOZTzcDEMZxmK_8IQHZONbEAXVrFuMd36Dwtee&s=10"
// );

// console.log(imgSrc);

// let btn=document.querySelector("button");
// let img =document.querySelector("img");

// btn.addEventListener('dblclick',() =>{
//    img.setAttribute(
//      "src",
//      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WDmFyV1HvNZ26BrAJjNbtVV_oudWpSLmLAPZrMShNSEyym6zq-55afDuMTxRGVqRrtTOZTzcDEMZxmK_8IQHZONbEAXVrFuMd36Dwtee&s=10"
// );

   
// });
// console.log("outer");

/*   

let bulb=document.querySelector(".bulb");
let button =document.querySelector("button");
let toggle =false;

button.addEventListener('click',() =>{
    if(toggle){
       bulb.style.backgroundColor="transparent";
        toggle=false;
    }
    else{
        bulb.style.backgroundColor="yellow";
        toggle=true;   
    }
    
   
 });
console.log("outer");

*/

// let form =document.querySelector("form");
// console.log(form);


// form.addEventListener("submit",(events) =>{
//       events.preventDefault();
//       console.log(events);
      
//       if(form[0].value.length <= 0) {
//           alert("Please enter your name");
//       } 
//       let h1 = document.createElement("h1");
      
//       h1.textContent = form[0].value;

//       document.body.appendChild(h1);     //Append:it will add the element at the end of the body tag
//      //document.body.prepend(h1);      //Prepend:it will add the element at the start of the body tag

//  form.reset();
// });
