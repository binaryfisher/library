const addBookBtn = document.querySelector("#add-a-book");
const confirmAddBtn = document.querySelector("#confirm-add");
const cancelAddBtn = document.querySelector("#cancel-add");
const popUpForm = document.querySelector(".popup-form");
const inputs = document.querySelector(".form-container").elements;
const cardsContainer = document.querySelector(".cards-container")

const handleAddBook = (event) => {
    event.preventDefault();
    var cardDiv = document.createElement("div");
    cardDiv.className = "card"
    cardsContainer.appendChild(cardDiv);
  
   
  
}


addBookBtn.addEventListener('click', () =>{
    popUpForm.style.display = "block";
})

cancelAddBtn.addEventListener('click', (event) => {
    popUpForm.style.display = "none";
    event.preventDefault();
})

confirmAddBtn.addEventListener('click', handleAddBook);