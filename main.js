const form = document.querySelector('form');
const formData = new FormData(form);

fetch('/api/submit', {
    method: 'POST',
    body: formData
  })