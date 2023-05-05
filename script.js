function updateTimer() {
  const now = new Date();
  const target = new Date('2023-05-21T00:00:00');
  const diff = target - now;

  if (diff < 0) {
    document.getElementById('timer').innerHTML = 'The event has started!';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

  setTimeout(updateTimer, 1000);
}

async function submitForm() {
  const form = document.getElementById('email-form');
  const emailInput = document.getElementById('email-input');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxfjbYx0SWD1HIjnaceB5EQDMKzZI9V1YARPwuWeHGyec6gu6NZnftSOc_IS3WLU_4O1A/exec'; // Replace with the Google Apps Script web app URL

  if (form.checkValidity()) {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    });

    if (response.ok) {
      alert('Email submitted successfully!');
      emailInput.value = '';
    } else {
      alert('Error submitting email. Please try again later.');
    }
  } else {
    form.reportValidity();
  }
}

document.getElementById('email-form').addEventListener('submit', (event) => {
  event.preventDefault();
  submitForm();
});

updateTimer();
