
const signupMessage = document.getElementById('signup-message');

signupForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (name && email && password) {
    const accessToken = generateAccessToken();
    const user = { name, email, accessToken };

    localStorage.setItem('user', JSON.stringify(user));
    signupMessage.textContent = 'Signup successful! Redirecting...';
    signupMessage.style.color = 'green';
    setTimeout(() => {
      window.location.href = '/profile.html';
    }, 2000);
  } else {
    signupMessage.textContent = 'All fields are mandatory.';
    signupMessage.style.color = 'red';
  }
});

function generateAccessToken() {
  // Generate a random access token (you can use a library for this)
}

// Profile Page
const user = JSON.parse(localStorage.getItem('user'));

if (!user || !user.accessToken) {
  window.location.href = '/signup.html';
} else {
  // Populate profile page with user details
}

// Logout
const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', function () {
  localStorage.removeItem('user');
  window.location.href = '/signup.html';
});
