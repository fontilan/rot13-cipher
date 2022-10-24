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
  const rotStr = [];

  for (const char of str) {
    if (alph.includes(char) === false) {
      rotStr.push(char);
    } else rotStr.push(alph[(shift + alph.indexOf(char)) % alph.length]);
  }

  str = rotStr.join('');

  encryptedTxt.textContent = str;
  inputTxt.value = '';
}
