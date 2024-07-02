document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  const STORAGE_KEY = 'feedback-form-state';

  function saveFormData() {
    const formState = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
  }
  function loadFormData() {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const { email, message } = JSON.parse(savedState);
      emailInput.value = email || '';
      messageInput.value = message || '';
    }
  }

  function clearFormData() {
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }
  form.addEventListener('input', saveFormData);
  form.addEventListener('submit', event => {
    event.preventDefault();

    if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      alert('Please complete both fields of the form.');
      return;
    }

    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    console.log(formData);

    clearFormData();
  });

  loadFormData();
});
