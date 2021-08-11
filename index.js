import Book from './book.js';
import Storage from './storage.js';
import UI from './ui.js';

const bookForm = document.querySelector('form');

document.addEventListener(
  'DOMContentLoaded',
  UI.displayList(Storage.getList().list),
);
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  const newBook = new Book(bookTitle, bookAuthor);
  Storage.saveBook(newBook);
  UI.addToUI(newBook);
  UI.deleteBook();
});
