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


function checkoutBook(library, bookTitle, bookGenre) {
  var checkoutMessage = `You have now checked out ${bookTitle} from the ${library.name}`

  if (library.shelves.fantasy[0].genre === bookGenre && library.shelves.fantasy[0].title === bookTitle) {
    library.shelves.fantasy.shift(library.shelves.fantasy[0]);
  } else if (library.shelves.fiction[0].genre === bookGenre && library.shelves.fiction[0].title === bookTitle) {
    library.shelves.fiction.shift(library.shelves.fiction[0]);
  } else if (library.shelves.nonFiction[0].genre === bookGenre && library.shelves.nonFiction[0].title === bookTitle) {
    library.shelves.nonFiction.shift(library.shelves.nonFiction[0]);
  } else {
    checkoutMessage = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
  }
  return checkoutMessage;
}

// function before
// function checkoutBook(library, bookTitle, bookGenre) {
//   var checkoutMessage = `You have now checked out ${bookTitle} from the ${library.name}`
//
//   if (library.shelves.fantasy[0].genre === bookGenre && library.shelves.fantasy[0].title === bookTitle) {
//     library.shelves.fantasy.shift(library.shelves.fantasy[0]);
//   } else if (library.shelves.fiction[0].genre === bookGenre && library.shelves.fiction[0].title === bookTitle) {
//     library.shelves.fiction.shift(library.shelves.fiction[0]);
//   } else if (library.shelves.nonFiction[0].genre === bookGenre && library.shelves.nonFiction[0].title === bookTitle) {
//     library.shelves.nonFiction.shift(library.shelves.nonFiction[0]);
//   } else {
//     checkoutMessage = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
//   }
//   return checkoutMessage;
// }




module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
