import { initializeApp } from "firebase/app" // imports firebase function to connect to Database
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, query, where  } from "firebase/firestore"// importing firestore services // collection service to link to a specific collection in the database
                                                             // collection service to link to a specific collection in the database
                                                             // getDocs service to read data
                                                             // addDoc adds data to the database


const firebaseConfig = {
    apiKey: "AIzaSyBCoIA-ZDTMvXNvcFZ23HFfjn6HA_2gdo0",
    authDomain: "flashcard-database-proj.firebaseapp.com",
    projectId: "flashcard-database-proj",
    storageBucket: "flashcard-database-proj.appspot.com",
    messagingSenderId: "433085086762",                          // <<<<<< This tells the program which database or project to connect to 
    appId: "1:433085086762:web:c8e291d873ac9e3e905753",
    measurementId: "G-31C07CPW5B"
  };

// intiializing the firebase app
initializeApp(firebaseConfig)

// initializing services
const db = getFirestore()

//collection reference

const colRef = collection(db, "books")   //<<<<<<Basic idea is to create a reference to some piece or part of data and apply a function to it

// get collection data
// getDocs(colRef)
//   .then((snapshot)=>{
//     let books = [ ]
//     snapshot.docs.forEach((doc) => {
//         books.push({...doc.data(), id: doc.id})
//     })
//     console.log(books)
//   })
//   .catch(err =>{
//     console.log(err.message)
//   })

// real time collection data
 onSnapshot(colRef, ((snapshot) => {
  let books = [ ]
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id: doc.id})
    })
    console.log(books)
 }))

// queries can also be made in the Firestore data base
  // add data

  const addBookForm = document.querySelector(".add")
  addBookForm.addEventListener("submit", (e) => {
    e.preventDefault()

    addDoc(colRef,{
        title: addBookForm.title.value,
        author: addBookForm.author.value
    })
    .then(() => {
        addBookForm.reset()
    })
})

// delete data
  const deleteBookForm = document.querySelector(".delete")
  deleteBookForm.addEventListener("submit", (e) => {
      e.preventDefault()


  const docRef = doc(db, "books", deleteBookForm.id.value);

  deleteDoc(docRef)
    .then(() =>{
      deleteBookForm.reset()
    })
  })
