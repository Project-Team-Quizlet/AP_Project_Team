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

// real time collection data
onSnapshot(colRef, (snapshot) => {
  let cards = [];
  snapshot.docs.forEach((doc) => {
    cards.push({ ...doc.data(), id: doc.id });
  });
  console.log(cards);
});

// queries can also be made in the Firestore data base
// add data
