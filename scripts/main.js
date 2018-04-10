var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image.jpg') {
      myImage.setAttribute ('src','images/new-test-image.jpg');
    } else {
      myImage.setAttribute ('src','images/test-image.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + ', welcome to Community Landscaping Services';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + ', welcome back to Community Landscaping Services';
}

myButton.onclick = function() {
  setUserName();
}