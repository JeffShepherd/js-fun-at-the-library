//I have to have this space here
function createTitle(title) {
  return "The " + title;
}


function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character;
}


function saveReview(newReview, existingReviews) {
  if (existingReviews[0] === newReview) {
    console.log('same as index 0')
  } else if (existingReviews[1] === newReview) {
    console.log('same as index 1')
  } else {
    existingReviews.push(newReview);
  }
  return existingReviews;
}



function calculatePageCount(title) {
  var splitTitleArray = title.split('');
  var pages = 0; //NAN is returned if this is not assigned to a number//

  for (i = 0; i < splitTitleArray.length; i++) {
    pages += 20;
  }
  return pages;
}


function writeBook(title, character, genre) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  }
  return book;
}


function editBook(book) {
  book.pageCount *= .75;
  return book;
}




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
