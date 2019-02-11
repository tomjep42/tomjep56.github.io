var myHeading = document.querySelector('h2');
myHeading.textContent = 'The Heart Of The North!';

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'The Heart Of The North, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'THe Heart Of The North, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

