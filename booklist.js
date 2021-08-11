export default class BookList {
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
    return arr.filter(
      (ele) => !(ele.title === book.title && ele.author === book.author)
    );
  }

  setList(list) {
    this.list = list;
    return this.list;
  }

  getBooks() {
    return this.list;
  }
}
