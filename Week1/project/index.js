// your code goes in here

//Collect 6 of your favorite quotes(quote and author) and store them in the right data structure

let quotes = [
  {
    quote: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote: 'Be the change that you wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'If you tell the truth, you do not have to remember anything',
    author: 'Mark Twain',
  },
  {
    quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
    author: 'Oscar Wilde',
  },
  {
    quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever',
    author: 'Mahatma Gandhi',
  },
];

//variables
let quoteTextInput = document.getElementById('quoteText');
let authorTextInput = document.getElementById('authorText');
let bottom = document.getElementById('btn');

// Create a function that fires after the button click
function displayRandomQuote() {
  let quotesItem = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').innerText = quotesItem['quote'];
  document.getElementById('author').innerText = quotesItem['author'];
}

document.getElementById('btn').addEventListener('click', displayRandomQuote);

window.onload = () => {
  displayRandomQuote();
};
