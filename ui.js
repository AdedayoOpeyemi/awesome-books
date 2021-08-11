import Book from "./book.js";
import Storage from "./storage.js";

const bookTable = document.querySelector(".book_holder");

export default class UI {
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
    document.querySelectorAll(".remove_book").forEach((button) => {
      button.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        const deleteTitle =
          e.target.parentElement.children[0].innerText.slice(7);
        const deleteAuthor =
          e.target.parentElement.children[1].innerText.slice(8);
        const bookDelete = new Book(deleteTitle, deleteAuthor);
        Storage.deleteBook(bookDelete);
      });
    });
  }
}
