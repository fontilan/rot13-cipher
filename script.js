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
    alph.includes(char)
      ? encStr.push(alph[(shift + alph.indexOf(char)) % alph.length])
      : encStr.push(char);
  }

  const enc = encStr.join('');

  encryptedTxt.textContent = enc;
  inputTxt.value = '';
}
