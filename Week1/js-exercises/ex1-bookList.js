/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

function createBookList(books) {
  // your code goes in here, return the ul element

  //  3. Use a `<ul>`  and `<li>` to display the books.
  let ul = document.createElement('ul');
  ul.style.listStyle = 'none';
  ul.style.display = 'flex';
  ul.style.justifyContent = 'flex-start';
  ul.style.flexWrap = 'wrap';

  ////  3. Use a `<ul>`  and `<li>` to display the books.
  const li = document.createElement('li');
  ul.appendChild(li);

  //  1. Iterate through the array of books.
  books.foreach((element) => {
    const p = document.createElement('p');
    p.innerText = element.title + '-' + element.author;
    li.appendChild(p);

    //  4. Add an `<img>` to each book that links to a URL of the book cover.
    const image = document.createElement('img');
    image.className = 'bcPic';
    li.appendChild(image);

    //5. Change the style of the book depending on whether you have read it(green) or not(red).
    if (element.alreadyRead === true) {
      li.style.backgroundColor = 'green';
    } else {
      li.style.backgroundColor = 'red';
    }
  });

  //  4. Add an `<img>` to each book that links to a URL of the book cover.
  let sourceImage = document.querySelectorAll('.bcPic');
  sourceImage[0].src = 'https://media.s-bol.com/7ov383lj3Rr/550x824.jpg';

  sourceImage[1].src =
    'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3074/9780307476708.jpg';

  sourceImage[2].src = 'https://www.studystore.nl/images/9780132119177/3/1';
}

let ulElement = createBookList(books);

document.querySelector('#bookList').appendChild(ulElement);
