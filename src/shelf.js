//
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
    return shelf;
  } else {
    return shelf;
  }
}


function unshelfBook(book, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1);
    } else {}
  }
  return shelf;
}


function listTitles(shelf) {
  var titles = "";
  for (i = 0; i < shelf.length; i++) {
    if (i < 2) {
      titles += shelf[i].title + ", ";
    } else {
      titles += shelf[i].title;
    }
  }
  return titles;
}


function searchShelf(shelf, book) {
  var booleanValue;

  for (i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      booleanValue = true;
    } else {
      booleanValue = false;
    }
  }
  return booleanValue;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
