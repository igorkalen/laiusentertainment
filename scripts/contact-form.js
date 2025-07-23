/*
    Developed by: Igor Kalen
    Contact: igor@igorkalen.dev
    Date: July 16, 2025
    Last Updated: July 16, 2025

    ---
    Copyright (c) 2025 Laius Group. All rights reserved.

    This code and its contents are proprietary to Laius Group. Unauthorized use,
    reproduction, distribution, or modification of any part of this code is strictly
    prohibited without explicit written permission from Laius Group.

    This code is intended solely for internal use by official Laius Group operations
    and deployment on verified domains and subdomains controlled by Laius Group.
    This restriction does not apply to domains or subdomains where customers have
    access to user-generated content, which may utilize parts of this code under
    specific agreements. 
 */

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
