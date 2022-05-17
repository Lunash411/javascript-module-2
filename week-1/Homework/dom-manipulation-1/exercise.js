/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const paragraphs = document.querySelectorAll("p")
console.log(paragraphs)

const ArrayElement = Array.from(paragraph)

console.log(ArrayElement)

const firstdiv =document.querySelector('.site-header')
console.log(firstdiv)

const jumbotronText = document.querySelector('jumbotron-text');
console.log(jumbotronText)
const primaryContent = document.querySelector(".primary-content");
console.log(primaryContent)



/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"*/

const alertBtn = document.querySelector("#alertBtn")
alertBtn.addEventListener("click" , ()=>{
    alert("Thanks for visiting Bikes for Refugees!")
})

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const changeBackgroundColor = document.querySelector("#alertBtn")
alertBtn.addEventListener("click" , ()=>{
    alertBtn("changebackgroundcolor")
})

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const addSomeText = document.querySelector('#addTextBtn')
addSomeText.addEventListener('click', ()=>{
    const newParagragh = document.createElement('p')
    const newContent = document.createTextNode('LEARN MORE')
    newParagragh.appendChild(newContent)
    console.log(newParagragh)
})



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const textShdIncrease = document.querySelector('#largerLinksBtn')
textShdIncrease.addEventListener('click', ()=>{
    const text = document.querySelectorAll('a')
    text.forEach(a => a.style.fontSize = '29px')
    
})


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const selectAddButton = document.querySelector("#addArticleBtn");
const selectInput = document.querySelector("input");

selectAddButton.addEventListener("click", () => {
  const newParagraphHere = document.createElement("p");
  newParagraphHere.textContent = selectInput.value;
  mainArticles.appendChild(newParagraphHere);
  selectInput.value = "";
});


/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
let arrayOfColors = ["#E41", "#8AA", "#8AE5D4", "#EDB0", "#EFF4A5"];
let colorIndex = 0;
changeColorButton.addEventListener("click", () => {
  bodyCol.style.backgroundColor = arrayOfColors[colorIndex];
  colorIndex = (colorIndex + 1) % arrayOfColors.length;
});

