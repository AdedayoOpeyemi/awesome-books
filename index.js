// import {saveList, getList } from '/storage.js'

function Book(title, author) {
  this.title = title;
  this.author = author;
}

saveList = (bookList) => {
  localStorage.setItem("BookList", JSON.stringify(bookList));
};

saveBook = (book) => {
  oldList = getList();
  oldList.push(book);
  saveList(oldList);
};

getList = () => {
  if (localStorage.getItem("BookList") == null) {
    const bookList = [];
    saveList(bookList);
  }

  return JSON.parse(localStorage.getItem("BookList"));
};

hello = () => {
  return "Hello World!";
};

const bookList = [];

const bookTable = document.querySelector(".book_holder");
const bookForm = document.querySelector("form");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector("#title").value;
  const bookAuthor = document.querySelector("#author").value;

  console.log(bookTitle);

  const newBook = new Book(bookTitle, bookAuthor);
  saveBook(newBook);
  addToUI(newBook);
});

function displayList(list) {
  list.forEach((book) => {
    addToUI(book);
  });
}
function addToUI(book) {
  const bookUI = `<p>Title: ${book.title} <br>
  author: ${book.author}</p>`;

  bookTable.innerHTML += bookUI;
}
displayList(getList());
