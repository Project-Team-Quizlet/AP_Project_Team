// array to hold flashcard objects
let flashcards = [];

function createFlashcard() {
  // get input values from form
  let frontText = document.getElementById("front").value;
  let backText = document.getElementById("back").value;

  // create flashcard object
  let flashcard = {
    front: frontText,
    back: backText
  };

  // add flashcard object to array
  flashcards.push(flashcard);

  // display flashcard on page
  let flashcardDiv = document.createElement("div");
  flashcardDiv.innerHTML = "<strong>Front:</strong> " + flashcard.front + "<br><strong>Back:</strong> " + flashcard.back;
  document.getElementById("flashcards").appendChild(flashcardDiv);
}

