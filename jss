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

  document.getElementById('timer').innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  setTimeout(updateTimer, 1000);
}

updateTimer();

async function submitForm() {
  const email = document.getElementById('email-input').value;
  if (!email) return;

  const url = 'https://api.apispreadsheets.com/data/12345/';
  const data = {
    data: { Email: email }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (response.status === 201) {
    alert('Thank you for subscribing!');
  } else {
    alert('There was an error. Please try again.');
  }
}

document.getElementById('email-form').addEventListener('submit', (event) => {
  event.preventDefault();
  submitForm();
});
