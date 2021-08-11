const bookTable = document.querySelector('.book_holder');
const bookForm = document.querySelector('form');

document.addEventListener('DOMContentLoaded', UI.displayList(Storage.getList().list));
bookForm.addEventListener('submit', ((e) => {
  e.preventDefault();

  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  const newBook = new Book(bookTitle, bookAuthor);
  Storage.saveBook(newBook);
  UI.addToUI(newBook);
  UI.deleteBook();
}));
