// import {saveList, getList } from '/storage.js'

function Book(title, author) {
  this.title = title;
  this.author = author;
}

saveList = (bookList) => {
  localStorage.setItem("BookList", JSON.stringify(bookList));
};

getList = () => {
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

  bookList.push(newBook);

  saveList(bookList);

  const bookUI = `<p>Title: ${newBook.title} <br>
                    author: ${newBook.author}</p>`;

  bookTable.innerHTML += bookUI;
});

function displayList(list) {
  list.forEach((book) => {
    const bookUI = `<p>Title: ${book.title} <br>
    author: ${book.author}</p>`;

    bookTable.innerHTML += bookUI;
  });
}
