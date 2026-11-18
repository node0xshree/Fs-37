let usersArr = [
  {
    name: "Ravi",
    Imageurl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500"
},
  {
    name: "Kishan",   
    Imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Jlbngeku-27X1JbjGxfctjEvJ2CRbCU3A1t5qOzoYA&s=10",
  },
  {
    name: "Karan",
   
    Imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bxgiX63MG8DmTEKZdcR93DjXL6n6D9R2a9oPIv1sqA&s=10",
  },
  {
    name: "Riya",
    
    
   Imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCNQJEOLyqjTY9HMEwNcZtcAfueQAiIaWkWITEAlyjqg&s",
  },
];

 
let main = document.querySelector("main");
let cards =document.querySelector(".cards");


  usersArr.forEach((val, index) => {
    cards.innerHTML += `<div class="user-card">
                <div class="img">
                    <img src="${val.Imageurl}" alt="">
                </div>

                <div class="text">
                    <h1>${val.name}</h1>
                   
                </div>

                <div class="btns">
                    <button id="edit">Edit</button>
                    <button onclick="deleteFn(${index})" id="del">Delete</button>
                </div>
            </div>`;
  });






  
  