let form = document.querySelector("form");
let cards = document.querySelector(".cards");

let usersArr = [
  {
    name: "Ravi",
    email: "ravi@gmail.com",
    password: "123456789",
    url: "https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Kishan",
    email: "kishan@gmail.com",
    password: "123456789",
    url: "https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Karan",
    email: "karan@gmail.com",
    password: "123456789",
    url: "https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Johar",
    email: "johar@gmail.com",
    password: "123456789",
    url: "https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

let renderCards = () => {
  cards.innerHTML = "";
  usersArr.forEach((val, index) => {
    cards.innerHTML += `<div class="user-card">
                <div class="img">
                    <img src="${val.url}" alt="">
                </div>

                <div class="text">
                    <h1>${val.name}</h1>
                    <p>${val.email}</p>
                </div>

                <div class="btns">
                    <button id="edit">Edit</button>
                    <button onclick="deleteFn(${index})" id="del">Delete</button>
                </div>
            </div>`;
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = form[0].value;
  let email = form[1].value;
  let password = form[2].value;
  let url = form[3].value;

  if (!name || !email || !password || !url) {
    alert("all fields are required");
    return;
  }

  let obj = {
    name,
    email,
    password,
    url,
  };

  usersArr.push(obj);

  cards.innerHTML = "";

  renderCards();

  console.log(usersArr);

  form.reset();
});

renderCards();

let deleteFn = (index) => {
  usersArr.splice(index, 1);

  console.log(usersArr);
  renderCards();
};