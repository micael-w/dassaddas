/* create a data structure to store 9 users name starting "starting user1 up to user9"
   create the list items (li) class in javascript
   create the list (ul) class in javascript
   use object oriend pattern to create ul from a class of ul
   use object oriend pattern to create lis from a class of Lis
   and finally show the result in the DOM
*/

const div = document.querySelector(".card");
const ul = document.querySelector(".list");
const li = document.querySelector(".list-items");

function NewElementMaker(nameOfElement) {
   const newElement = document.createElement(`${nameOfElement}`);
   return newElement;
}

const newItem = new NewElementMaker(`marquee`);
newItem.textContent = "lalala";
div.appendChild(newItem);
console.log(newItem);

function User(name) {
   this.name = name;
}


function renderUI(inputColor){
   const unOrderedList = document.createElement("ul");
   div.appendChild(unOrderedList);
   unOrderedList.classList.add("list");
   
   
   for (let i = 1; i < 10; i++) {
      const listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.backgroundColor = inputColor;
      const user = new User(`Mirwais${i}`);
      listItem.textContent = user.name;
      unOrderedList.appendChild(listItem);
      
   }
}

renderUI("orange");