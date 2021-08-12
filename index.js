import Book from './book.js';
import Storage from './storage.js';
import UI from './ui.js';
import DisplayContent from './display.js';

const bookForm = document.querySelector('form');
const navLinks = document.querySelectorAll('.nav')
var DateTime = luxon.DateTime;
const placeTime =  DateTime.now().toLocaleString(DateTime.DATETIME_MED);

document.addEventListener('DOMContentLoaded', UI.displayList(Storage.getList().list));
document.addEventListener('DOMContentLoaded', DisplayContent.renderTime(placeTime));


bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  const newBook = new Book(bookTitle, bookAuthor);
  Storage.saveBook(newBook);
  UI.addToUI(newBook);
  UI.deleteBook();
  DisplayContent.render("list");
  document.querySelector('.active-nav').classList.remove("active-nav");
  document.querySelector("#list").classList.add("active-nav");
});

navLinks.forEach((nav) => {
  nav.addEventListener('click', (e) => {
    document.querySelector('.active-nav').classList.remove("active-nav");
    e.target.classList.add("active-nav");
    DisplayContent.render(e.target.id)
  })
})
