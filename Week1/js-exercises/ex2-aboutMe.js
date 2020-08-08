/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

// 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = 'Arial, sans-serif';

// 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
document.getElementById('nickname').innerText = 'Niloufar';
document.getElementById('fav-food').innerText = 'juj';
document.getElementById('hometown').innerText = 'Shiraz';

//4. Iterate through each li and change the class to "list-item".
let listItem = document.getElementsByTagName('ul');
listItem.foreach((li) => {
  li.className = 'list-item';
});

//5.(In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.
const style = document.getElementsByTagName('style');
style.innerText = '.list-item {color : red;}';
document.head.appendChild(style);

//6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
const myImage = document.createElement('img');
myImage.src = './myImage.jpg';
myImage.style.width = '';
document.body.appendChild(myImage);
