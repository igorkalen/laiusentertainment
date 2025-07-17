const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  ['email', 'name', 'category', 'message'].forEach(field => {
    document.getElementById(field + 'Error').classList.remove('active');
  });

  let valid = true;

  const emailInput = form.email;
  const emailVal = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailVal)) {
    document.getElementById('emailError').classList.add('active');
    valid = false;
  }

  const nameVal = form.name.value.trim();
  if (nameVal.length < 2) {
    document.getElementById('nameError').classList.add('active');
    valid = false;
  }

  const categoryVal = form.category.value;
  if (!categoryVal) {
    document.getElementById('categoryError').classList.add('active');
    valid = false;
  }

  const messageVal = form.message.value.trim();
  if (messageVal.length < 5) {
    document.getElementById('messageError').classList.add('active');
    valid = false;
  }

  if (!valid) return;

  form.submit();
});
