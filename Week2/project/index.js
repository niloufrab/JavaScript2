/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
document.body.style.backgroundColor = '#1F555C';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';

//timer inside border-box
const box = document.querySelector('#box');
box.style.margin = '0 auto';
box.style.border = '4px solid #14363A';
box.style.borderRadius = '1rem';
box.style.padding = '1rem';
divApp.appendChild(box);
box.style.width = '30%';

//timer
const timer = document.getElementById('timer');
divApp.appendChild(timer);
timer.innerText = '00:00';
timer.style.fontSize = '1.2rem';

//timer show function
let elapsed;
function changeSetNumber(x) {
  elapsed = parseInt(x, 10) * 60;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timer.textContent = `${minutes}:${seconds}`;
}

//start timer show
let intervalId = null;
function start() {
  intervalId = setInterval(countDown, 1000);
}

//timer function countdown
function countDown() {
  if (elapsed > 0) {
    elapsed -= 1;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    timer.textContent = `${minutes}:${seconds}`;
    running = false;
  } else {
    timer.textContent = "Time's up";
    clearInterval(intervalId);
    running = true;
    setNumber.innerText = '0';
  }
}

//stop timer show
function stopIt() {
  clearInterval(intervalId);
}

//play and pause function
playButton.addEventListener('click', start);
pauseButton.addEventListener('click', stopIt);
