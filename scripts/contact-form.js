/*
    Developed by: Igor Kalen  
    Contact: igor@igorkalen.dev  
    Creation Date: July 31, 2025  
    Last Updated: August 1, 2025
    Version: 1.0.0
    Status: IN PRODUCTION
    File: contact-form.js

    ----
    © 2025 Laius Entertainment. All rights reserved.

    This code is the exclusive property of Laius Entertainment.  
    Unauthorized use, copying, distribution, or modification  
    is strictly prohibited.

    For internal use only on systems, services, and domains  
    officially managed by Laius Entertainment.
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
