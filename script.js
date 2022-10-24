const inputTxt = document.getElementById('input-txt');
const shiftSelector = document.getElementById('shift-selector');
const encryptBtn = document.getElementById('encrypt-btn');
const encryptedTxt = document.getElementById('encrypted-txt');

encryptBtn.addEventListener('click', function (e) {
  e.preventDefault();
  rot13(inputTxt.value.toUpperCase());
});

function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shift = Number(shiftSelector.value);
  const rotStr = [];

  for (const char of str) {
    if (alphabet.includes(char) === false) {
      rotStr.push(char);
    } else
      rotStr.push(alphabet[(shift + alphabet.indexOf(char)) % alphabet.length]);
  }

  str = rotStr.join('');

  encryptedTxt.textContent = str;
  inputTxt.value = '';
}
