function validateLoginForm() {
    var email = $('#email-login').val();
    var password = $('#password-login').val();

    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}

function validateSignupForm() {
    var fullName = $('#fullName').val();
    var cep = $('#cep').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var passwordRepeat = $('#psw-repeat').val();

    if (password !== passwordRepeat) {
        alert("As senhas não correspondem.");
        return false;
    }

    if (fullName === "" || cep === "" || email === "" || password === "" || passwordRepeat === "") {
        alert("Por favor, preencha todos os campos para cadastro.");
        return false;
    }

    return true;
}

$('#loginBtn').click(function (e) {
    if (validateLoginForm()) {
        alert("Login efetuado com sucesso!")
        $('#loginForm')[0].reset();
    }
});

$('#submitBtn').click(function (e) {
    if (validateSignupForm()) {
        alert("Cadastrado com sucesso!")
        $('#signupForm')[0].reset();
    }
});

$('#cancelBtn').click(function () {
    $('#signupForm')[0].reset();
});

$('#showSignupBtn').on('click', function () {
    $('#signupForm').addClass('active');
    $('#loginForm').removeClass('active');
    $('#showSignupBtn').addClass('active');
    $('#showLoginBtn').removeClass('active');
});

$('#showLoginBtn').on('click', function () {
    $('#loginForm').addClass('active');
    $('#signupForm').removeClass('active');
    $('#showLoginBtn').addClass('active');
    $('#showSignupBtn').removeClass('active');
});

