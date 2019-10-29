/*let myHeading = document .querySelector ('h3');
myHeading.textContent = 'Hello world!'; 

let myVariable = 'George';

myVariable

/* Hi */ 
// hi
 // ji 

/* if(myVariable === 'George') {
	alert('Thank god');
} else {
	alert('Crap');
} (= Variable checker.) */ 

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'photos/rocket.jpg') {
    myImage.setAttribute ('src','photos/neilarmstrong.jpg');
  } else {
    myImage.setAttribute ('src','photos/rocket.jpg');
  }
}
let myButton = document.querySelector ('button');
let myHeading = document.querySelector ('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to Apollo 11 ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Apollo 11 ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}






