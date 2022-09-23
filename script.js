let InchesInput = document.getElementById('InchesInput');
InchesInput.addEventListener('input', (e) => {
  let Inches = e.target.value;
  document.getElementById('CentimetersOutput').innerText = Inches * 2.54;
});
