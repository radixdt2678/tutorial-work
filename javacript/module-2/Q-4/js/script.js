const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  const initialText = 'Click me';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.innerHTML =
      '<span style="background-color: cadetblue; color: white ;" >Button clicked</span>';
  } else {
    btn.textContent = initialText;
  }
});
