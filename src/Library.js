//
function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
  return library;
}

// refactor addBook to be more useful outside of this specific test
function addBook(library, book) {
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book);
  } else if (book.genre === 'fiction') {
    library.shelves.fiction.push(book);
  } else {
    library.shelves.nonFiction.push(book);
  }
  return library;
}


// function checkoutBook(library, bookTitle, bookGenre) {
//
// }




function checkoutBook(library, bookTitle, bookGenre) {
  var checkoutMessage = `You have now checked out ${bookTitle} from the ${library.name}`

  if (library.shelves.nonFiction.length > 0 && library.shelves.nonFiction[0].title === bookTitle) {
    library.shelves.nonFiction.shift();
  } else if (library.shelves.fiction.length > 0 && library.shelves.fiction[0].title === bookTitle) {
    library.shelves.fiction.shift();
  } else if (library.shelves.fantasy.length > 0 && library.shelves.fantasy[0].title === bookTitle) {
    library.shelves.fantasy.shift();
  } else {
    return checkoutMessage = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
  }
  return checkoutMessage;
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
