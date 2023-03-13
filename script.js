const addBookBtn = document.querySelector("#add-a-book");
const confirmAddBtn = document.querySelector("#confirm-add");
const cancelAddBtn = document.querySelector("#cancel-add");
const popUpForm = document.querySelector(".popup-form");
const inputs = document.querySelector(".form-container").elements;
const cardsContainer = document.querySelector(".cards-container");
const authorAlert = document.querySelector("#author-alert");
const titleAlert = document.querySelector("#title-alert");
const pageAlert = document.querySelector("#page-alert");

const handleAddBook = (event) => {
    if(!inputs[0].value){
        authorAlert.innerHTML = "Please enter a valid name!"
    }else{
        authorAlert.innerHTML = "" 
    }
    if(!inputs[1].value){
        titleAlert.innerHTML = "Please enter a valid title!"
    }else{
        titleAlert.innerHTML = ""
    }
    if(!inputs[1].value || isNaN(inputs[2].value)){
        pageAlert.innerHTML = "Please enter a valid page number!"
    }else{
        pageAlert.innerHTML = "" 
    }
    if(inputs[0].value && inputs[1].value && inputs[1].value && !isNaN(inputs[2].value)){
        var cardDiv = document.createElement("div");
        var authorDiv = document.createElement("div");
        var titleDiv = document.createElement("div");
        var pageDiv = document.createElement("div");

        cardDiv.className = "card"
        authorDiv.innerHTML = "Author: " + inputs[0].value;
        titleDiv.innerHTML = "Title: " + inputs[1].value;
        pageDiv.innerHTML = "Page: " + inputs[2].value;

        cardDiv.appendChild(authorDiv);
        cardDiv.appendChild(titleDiv);
        cardDiv.appendChild(pageDiv);

        cardsContainer.appendChild(cardDiv);
        popUpForm.style.display = "none";
    }
    
  
    event.preventDefault();
  
}


addBookBtn.addEventListener('click', () =>{
    popUpForm.style.display = "block";
})

cancelAddBtn.addEventListener('click', (event) => {
    popUpForm.style.display = "none";
    event.preventDefault();
})

confirmAddBtn.addEventListener('click', handleAddBook);