// Get modal elements
const authModal = document.getElementById('authModal');
const closeAuth = document.getElementById('closeAuth');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

// Open modal (for example, on button click)
document.getElementById('loginBtn').addEventListener('click', () => {
  authModal.style.display = 'flex';
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('registerBtn').addEventListener('click', () => {
  authModal.style.display = 'flex';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
});

// Close modal
closeAuth.addEventListener('click', () => {
  authModal.style.display = 'none';
});

// Toggle between Login and Register
showRegister.addEventListener('click', () => {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
});

showLogin.addEventListener('click', () => {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('registerForm').style.display = 'none';
});

