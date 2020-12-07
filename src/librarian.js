//
class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, isMorning) {
    if (isMorning === false || isMorning === undefined) {
      return `Hello, ${name}!`;
    } else {
      return `Good morning, ${name}!`;
    }
  }

  findBook(bookTitle) {
    var bookConfirmation = `Yes, we have ${bookTitle}`;

    if (Librarian.library.shelves.nonFiction.length > 0 && Librarian.library.shelves.nonFiction[0].title === bookTitle) {
      return bookConfirmation;
    } else if (Librarian.library.shelves.fiction.length > 0 && Librarian.library.shelves.fiction[0].title === bookTitle) {
      return bookConfirmation;
    } else if (Librarian.library.shelves.fantasy.length > 0 && Librarian.library.shelves.fantasy[0].title === bookTitle) {
      return bookConfirmation;
    } else {
      return bookConfirmation = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
    }
  }
  

}









module.exports = Librarian;
