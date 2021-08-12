export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  bookAnnouce() {
    return "${this.title} was authored by ${this.author}"
  }
}
