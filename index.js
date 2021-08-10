const bookTable = document.querySelector('.book_holder');
const bookForm = document.querySelector('form');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function saveList(bookList) {
  localStorage.setItem('BookList', JSON.stringify(bookList));
}

function getList() {
  if (localStorage.getItem('BookList') == null) {
    const bookList = [];
    saveList(bookList);
  }
  return JSON.parse(localStorage.getItem('BookList'));
}

function saveBook(book) {
  const oldList = getList();
  oldList.push(book);
  saveList(oldList);
}

function arrayRemove(arr, book) {
  return arr.filter((ele) => ele.title !== book.title);
}

function deleteBook() {
  document.querySelectorAll('.remove_book').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.target.parentElement.remove();
      const deleteTitle = e.target.parentElement.children[0].innerText.slice(7);
      const deleteAuthor = e.target.parentElement.children[2].innerText.slice(8);
      const bookDelete = new Book(deleteTitle, deleteAuthor);
      const updatedList = arrayRemove(getList(), bookDelete);
      saveList(updatedList);
    });
  });
}

function addToUI(book) {
  const bookUI = `<div>
    <p>Title: ${book.title}</p>
    <p>author: ${book.author}</p>
    <button class="remove_book">Remove</button>
  </div>`;

  bookTable.innerHTML += bookUI;
  deleteBook();
}

function displayList(list) {
  list.forEach((book) => {
    addToUI(book);
  });
}

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;

  const newBook = new Book(bookTitle, bookAuthor);
  saveBook(newBook);
  addToUI(newBook);
});

displayList(getList());
