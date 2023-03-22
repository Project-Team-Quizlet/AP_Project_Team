import { db, colRef } from "./connect"; // importing my initialized database and collection reference from connect.js so they can be used in this Javascript file
import { addDoc, deleteDoc, doc } from "firebase/firestore"; // importing these functions from the firebase library so they can be used in this Javascript file
import cards from "./cards"; //><<< importingd the card array from cards.js so it can be used in this javascript file

// targets addcardform in index html
export const addCardForm = document.querySelector(".addCard");
addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();

  AddData();
  console.log("Working");
});

// this function will add data to the database through the make your own flashcard form
function AddData() {
  addDoc(colRef, {
    Front: addCardForm.front.value,
    Back: addCardForm.back.value,
  }).then(() => {
    addCardForm.reset();
  });
}

// delete data... function can be modified to delete data from the database but  we can also just hit the delete button in the database
// function DeleteData() {
//   const deleteBookForm = document.querySelector(".delete");
//   deleteBookForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const docRef = doc(db, "books", deleteBookForm.id.value);

//     deleteDoc(docRef).then(() => {
//       deleteBookForm.reset();
//     });
//   });
// }

// adding the objects in the cards.js array
function addLine() {
  cards.forEach((element) => {
    addDoc(colRef, {
      Front: element.Front,
      Back: element.Back,
    });
  });
  console.log("Worked");
}

//DO NOT UNCOMMENT... WILL KEEP ADDING THE SAME CARDS IN cards.js to Database after every refresh
// setTimeout(function () {
//   addLine();
// }, 3000);

// cards.forEach((element) => {
//   console.log(element.Front);
// });

export default { AddData, addCardForm }; //<<<< exporting these variables and functions so they can be used and referred to in other Javascript files(specifically connect.js)
