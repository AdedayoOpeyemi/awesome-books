import Book from './book.js';
import BookList from './booklist.js';

export default class Storage {
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
      bookList.getBooks().map((book) => Object.assign(new Book(), book)),
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
