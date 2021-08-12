import Book from './book.js';
import Storage from './storage.js';
import UI from './ui.js';
import DisplayContent from './display.js';

const bookForm = document.querySelector('form');
const navLinks = document.querySelectorAll('.nav')

document.addEventListener('DOMContentLoaded', UI.displayList(Storage.getList().list));

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  const newBook = new Book(bookTitle, bookAuthor);
  Storage.saveBook(newBook);
  UI.addToUI(newBook);
  UI.deleteBook();
});

navLinks.forEach((nav) => {
  addEventListener('click', (e) => {
    document.querySelector('.active-nav').classList.remove("active-nav");
    e.target.classList.add("active-nav");
    DisplayContent.render(e.target.id)
  })
})
