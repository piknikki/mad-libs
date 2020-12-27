var storySelector = document.querySelector('section.story');
var formSelector = document.querySelector('section.form');
var refreshSelector = document.getElementById('start-over');
var submitButton = document.getElementById('write');
var noun1 = document.getElementById('noun1');
var noun2 = document.getElementById('noun2');
var place1 = document.getElementById('place1');
var num1 = document.getElementById('num1');
var verb1 = document.getElementById('verb1');
var clothing1 = document.getElementById('clothing1');
var clothing2 = document.getElementById('clothing2');
var beverage1 = document.getElementById('beverage1');
var food1 = document.getElementById('food1');

submitButton.addEventListener('click', function(e) {
  e.preventDefault();

  toggle();
});

refreshSelector.addEventListener('click', function(e) {
  e.preventDefault();

  toggle();
});

function toggle() {
  formSelector.classList.toggle('hidden');
  storySelector.classList.toggle('hidden');
};


