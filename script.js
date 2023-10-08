const myLybrary = [];

function Book(title, author, pages, read ){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

let aDwDragons = new Book('a dance with dragons', 'G.R.R Martin', 1073, true);

function addBookToLibrary(book) {
    myLybrary.push(book)
}

let aStormOfswords = new Book('a storm of swords', 'G.R.R Martin', 1122, true);

let elAleph = new Book('el Aleph', 'Jorge Luis Borges', 378, false);

addBookToLibrary(aDwDragons);
addBookToLibrary(aStormOfswords);
addBookToLibrary(elAleph);
console.log(myLybrary)

const card = document.querySelector('#book-card');

function display(n) {
    if (myLybrary.length < 1) {
        bookTitle.textContent = 'There is nothing to show. Try adding a book.'
        card.appendChild(bookTitle);
    }
    else{
        const bookTitle = document.createElement('h2');
        const bookAuthor = document.createElement('h3');
        const bookPages = document.createElement('h4');
        const isRead = document.createElement('h5');
        
        card.setAttribute('data', n);
        bookTitle.textContent = 'Title:' + ' ' + myLybrary[n]['title'];
        bookAuthor.textContent = 'Author:' + ' ' + myLybrary[n]['author'];
        bookPages.textContent = 'pages:' + ' ' + myLybrary[n]['pages'];
        myLybrary[n]['read'] === true ? isRead.textContent = 'I have read it!' :
        isRead.textContent = 'I am yet to read it';
    
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(isRead);
    }
}
display(0);

function clear() {
    card.textContent = ' '
}
//buttons handler

let counter = 0;
const next = document.querySelector('#next');
next.addEventListener( 'click', () => {
 clear();
 if (counter >= myLybrary.length){
    counter = 0;
 }
 display(counter);
counter++
console.log(counter)
})

function removeBook(b) {
myLybrary.splice(b, 1)
clear();
display(0);
};

const remove = document.querySelector('#remove');
remove.addEventListener('click', () => {
    //set a variable wich value corresponds to the 'data'
    //attribute of the card element.
    let b = card.getAttribute('data');
    removeBook(b);
    console.log(myLybrary.length)
});
const formContainer = document.querySelector(".form");
const add = document.querySelector('#add-book');
add.addEventListener('click', ()=> {
formContainer.toggleAttribute('visible');
})

const submitBook = document.querySelector('#submit-book');
submitBook.addEventListener('click', () =>{
    function handleSubmit() {
        let submittedBook = new Book(titleInput, 
             authorInput, pagesInput, readResult());
         addBookToLibrary(submittedBook);
     };
     handleSubmit()
})
//handle book submit
let formDiv = document.querySelector('.form');
const titleInput = document.querySelector('#book-title').value;
const authorInput = document.querySelector('#book-author').value;
const pagesInput = document.querySelector('#book-pages').value;
const readInput = document.querySelector('#its-read');
function readResult() {
    readInput.hasAttribute(checked) ? true : false;
}


function submitPrevent(event) {
        event.preventDefault();
}