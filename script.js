const inputTxt = document.getElementById('input-txt');
const shiftSel = document.getElementById('shift-sel');
const encryptBtn = document.getElementById('encrypt-btn');
const encryptedTxt = document.getElementById('encrypted-txt');

encryptBtn.addEventListener('click', function (e) {
  e.preventDefault();
  encrypt(inputTxt.value.toUpperCase());
});

function encrypt(str) {
  const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shift = Number(shiftSel.value);
  const encStr = [];

  for (const char of str) {
    if (alph.includes(char) === false) {
      encStr.push(char);
    } else encStr.push(alph[(shift + alph.indexOf(char)) % alph.length]);
  }

  enc = encStr.join('');

  encryptedTxt.textContent = enc;
  inputTxt.value = '';
}
