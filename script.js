const inputTxt = document.getElementById('input-txt');
const encryptBtn = document.getElementById('encrypt-btn');
const encryptedTxt = document.getElementById('encrypted-txt');

encryptBtn.addEventListener('click', function (e) {
  e.preventDefault();
  rot13(inputTxt.value.toUpperCase());
});

function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shift = 13;
  const rot13 = [];
  for (let i = 0; i < alphabet.length; i += 1) {
    rot13.push(alphabet.charAt((i + shift) % alphabet.length));
  }
  // alternatively
  // const rot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM"

  const rotStr = [];
  for (const char of str) {
    if (alphabet.includes(char) === false) {
      rotStr.push(char);
    } else rotStr.push(rot13[alphabet.indexOf(char)]);
  }

  str = rotStr.join('');
  encryptedTxt.textContent = str;
  inputTxt.value = '';
}
