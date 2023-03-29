import { initializeApp } from "firebase/app"; // imports firebase function to connect to Database
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
// importing firestore services // collection service to link to a specific collection in the database
// collection service to link to a specific collection in the database
// getDocs service to read data
// addDoc adds data to the database
import { addCardForm } from "./addDelete";

const firebaseConfig = {
  apiKey: "AIzaSyBCoIA-ZDTMvXNvcFZ23HFfjn6HA_2gdo0",
  authDomain: "flashcard-database-proj.firebaseapp.com",
  projectId: "flashcard-database-proj",
  storageBucket: "flashcard-database-proj.appspot.com",
  messagingSenderId: "433085086762", // <<<<<< This tells the program which database or project to connect to
  appId: "1:433085086762:web:c8e291d873ac9e3e905753",
  measurementId: "G-31C07CPW5B",
};

// intiializing the firebase app
initializeApp(firebaseConfig);

// initializing services
export const db = getFirestore();

//collection reference

export const colRef = collection(db, "Card"); //<<<<<<Basic idea is to create a reference to some a collection in our database
// export const colRefMath = collection(db, "Math");

const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back");
const nextButton = document.querySelector("#nxt");
const previousButton = document.querySelector("#prev");

// real time collection data
onSnapshot(colRef, (snapshot) => {
  let cards = [];
  snapshot.docs.forEach((doc) => {
    cards.push({ ...doc.data(), id: doc.id });
  });
  console.log(cards);

  let cardNumber = 0;

  // nextButton.addEventListener("click", () => {
  //   cardNumber += 1;
  //   if (cardNumber > cards.length - 1) {
  //     cardNumber = 0;
  //   }
  //   console.log(cardNumber);
  //   cardFront.innerHTML = cards[cardNumber].Front;
  //   cardBack.innerHTML = cards[cardNumber].Back;
  // });

  // previousButton.addEventListener("click", () => {
  //   cardNumber -= 1;
  //   if (cardNumber < 0) {
  //     cardNumber = cards.length - 1;
  //   }
  //   console.log(cardNumber);
  //   cardFront.innerHTML = cards[cardNumber].Front;
  //   cardBack.innerHTML = cards[cardNumber].Back;
  // });
});

// queries can also be made in the Firestore data base
// add data
