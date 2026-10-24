const $ = sel => document.querySelector(sel);
const box = $('#box');
const input = $('#color-input');
const applyBtn = $('#apply-btn');
const randomBtn = $('#random-btn');

const setColor = c => box.style.backgroundColor = c;

applyBtn.addEventListener('click', () => setColor(input.value));

// Apply random color on button click
document.getElementById('random-btn').addEventListener('click', function() {
  var color = randomHex();
  setBoxColor(color);
});

function setBoxColor(color) {
  document.getElementById('box').style.backgroundColor = color;
}

document.getElementById('apply-btn').addEventListener('click', function() {
  var color = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = color;
});