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

function MyUsers(listOfUsers) {

}

function User(name) {
   this.name = name;
}



/* const user1 = new User("Mirwais1");
const user2 = new User("Mirwais2");
const user3 = new User("Mirwais3");
const user4 = new User("Mirwais4");
const user5 = new User("Mirwais5");
const user6 = new User("Mirwais6");
const user7 = new User("Mirwais7");
const user8 = new User("Mirwais8");
const user9 = new User("Mirwais9"); */

const unOrderedList = document.createElement("ul");
div.appendChild(unOrderedList);
unOrderedList.classList.add("list");


for (let i = 1; i < 10; i++) {
   const listItem = document.createElement("li");
/*    const user = new User(`Mirwais${i}`); */
   const user = new User("test");
/*    listItem.textContent = `Mirwais${i}`; */
/*    listItem.textContent = `Mirwais${i}`; */
   listItem.textContent = user;
   unOrderedList.appendChild(listItem);
   listItem.classList.add("list-items");
}





// li.textContent = user1.name


