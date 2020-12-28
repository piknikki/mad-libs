var storySelector = document.querySelector('div.story');
var formSelector = document.querySelector('div.form');
var refreshSelector = document.getElementById('start-over');
var submitButton = document.getElementById('write');

submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  var userInputs = document.getElementsByClassName('inputs');

  toggle();

  document.getElementById('noun1Text').innerText = userInputs[0].value;
  document.getElementById('place1Text').innerText = userInputs[1].value;
  document.getElementById('num1Text').innerText = userInputs[2].value;
  document.getElementById('noun2Text').innerText = userInputs[3].value;
  document.getElementById('verb1Text').innerText = userInputs[4].value;
  document.getElementById('clothing1Text').innerText = userInputs[5].value;
  document.getElementById('clothing2Text').innerText = userInputs[6].value;
  document.getElementById('beverage1Text').innerText = userInputs[7].value;
  document.getElementById('food1Text').innerText = userInputs[8].value;

  document.getElementById('form-reset').reset();
});

refreshSelector.addEventListener('click', function(e) {
  e.preventDefault();

  toggle();
});

function toggle() {
  formSelector.classList.toggle('hidden');
  storySelector.classList.toggle('hidden');
};


