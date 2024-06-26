document.getElementById('cancelBtn').addEventListener('click', function () {
    document.getElementById('signupForm').reset();
});

document.getElementById('showSignupBtn').addEventListener('click', function () {
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('showSignupBtn').classList.add('active');
    document.getElementById('showLoginBtn').classList.remove('active');
});

document.getElementById('showLoginBtn').addEventListener('click', function () {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('signupForm').classList.remove('active');
    document.getElementById('showLoginBtn').classList.add('active');
    document.getElementById('showSignupBtn').classList.remove('active');
});