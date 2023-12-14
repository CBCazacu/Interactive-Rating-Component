// Import stylesheets
import './style.css';

//submit button
const myButton = document.getElementById("submit");

//first div-with ratings and submit button
const ratingScreen = document.getElementById("rating");

//second div with the result
const thankScreen = document.getElementById("thanks");

myButton.addEventListener('click', function() {
  //hide the first div when I click on the button
  ratingScreen.classList.add('hide');

  //show the second div when I click on the button
  thankScreen.classList.add('show');
})


let finalRating;
const ratingStatement = document.querySelector('.rating-statement');

const buttons = document.getElementsByClassName('ratingCircle');

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener('click', function() {

    //remove the class from all the buttons
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('pressed');
    }

    //add it to the clicked one
    buttons[index].classList.add('pressed');

    //store the final value for rating
    finalRating = index+1;

    //assignt the value to the span element which stores it
    // ratingStatement.textContent = 
    // `You selected ${finalRating} out of 5`;

    ratingStatement.textContent = 
    'You selected' + ' ' + finalRating + ' ' + 'out of 5.'

  });
}
