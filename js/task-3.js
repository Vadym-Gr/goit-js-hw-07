const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const cleanedValue = nameInput.value.trim();

  nameOutput.textContent =
    cleanedValue === '' ? 'Anonymous' : cleanedValue;
});