const bookTable = document.querySelector('.book_holder');
const bookForm = document.querySelector('form');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookList {
  constructor() {
    this.list = [];
  }

  addBook(book) {
    this.list.push(book);
  }

  removeBook(book) {
    this.list = BookList.arrayRemove(this.list, book);
  }

  static arrayRemove(arr, book) {
    return arr.filter((ele) => ele.title !== book.title && ele.author !== book.author);
  }

  setList(list) {
    this.list = list;
    return this.list;
  }

  getBooks() {
    return this.list;
  }
}

class Storage {
  static saveList(bookList) {
    localStorage.setItem('BookList', JSON.stringify(bookList));
  }

  static getList() {
    if (localStorage.getItem('BookList') == null) {
      Storage.saveList(new BookList());
    }
    const bookList = Object.assign(
      new BookList(),
      JSON.parse(localStorage.getItem('BookList')),
    );

    bookList.setList(
      bookList.getBooks()
        .map((book) => Object.assign(new Book(), book)),
    );

    return bookList;
  }

  static saveBook(book) {
    const oldList = Storage.getList();
    oldList.addBook(book);
    Storage.saveList(oldList);
  }

  static deleteBook(book) {
    const oldList = Storage.getList();
    oldList.removeBook(book);
    Storage.saveList(oldList);
  }
}

class UI {
  static addToUI(book) {
    const bookUI = `<div>
    <p>Title: ${book.title}</p>
    <p>author: ${book.author}</p>
    <button class="remove_book">Remove</button>
    <hr></div>`;

    bookTable.innerHTML += bookUI;
  }

  static displayList(list) {
    list.forEach((book) => {
      UI.addToUI(book);
      UI.deleteBook();
    });
  }

  static deleteBook() {
    document.querySelectorAll('.remove_book').forEach((button) => {
      button.addEventListener('click', ((e) => {
        e.target.parentElement.remove();
        const deleteTitle = e.target.parentElement.children[0].innerText.slice(7);
        const deleteAuthor = e.target.parentElement.children[2].innerText.slice(8);
        const bookDelete = new Book(deleteTitle, deleteAuthor);
        Storage.deleteBook(bookDelete);
      }));
    });
  }
}

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
