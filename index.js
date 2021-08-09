function Book(title, author) {
  this.title = title;
  this.author = author;
}

hello = () => {
  return "Hello World!";
}
const bookList = [];

const bookTable = document.querySelector('.book_holder')
const bookForm = document.querySelector('form')

bookForm.addEventListener('submit', (e) => {

  e.preventDefault();

  const bookTitle = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  
  console.log(bookTitle);


  const newBook = new Book(bookTitle, bookAuthor);

  bookList << newBook;
  
  const bookUI = `<p>Title: ${newBook.title} <br>
                    author: ${newBook.author}</p>`

  bookTable.innerHTML += bookUI
})