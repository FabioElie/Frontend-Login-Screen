function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateCEP(cep) {
    var regex = /^[0-9]{5}-?[0-9]{3}$/;
    return regex.test(cep);
}

function validateLoginForm() {
    var email = $("#email-login").val();
    var password = $("#password-login").val();

    if (!validateEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}

function validateSignupForm() {
    var fullName = $("#fullName").val();
    var cep = $("#cep").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var passwordRepeat = $("#psw-repeat").val();

    if (!validateCEP(cep)) {
        alert(
            "Por favor, insira um CEP válido no formato XXXXX-XXX ou XXXXXXXX."
        );
        return false;
    }

    if (!validateEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    if (password !== passwordRepeat) {
        alert("As senhas não correspondem.");
        return false;
    }

    if (
        fullName === "" ||
        cep === "" ||
        email === "" ||
        password === "" ||
        passwordRepeat === ""
    ) {
        alert("Por favor, preencha todos os campos para cadastro.");
        return false;
    } 

    return true;
}

$("#loginBtn").click(function (e) {
    if (validateLoginForm()) {
        alert("Login efetuado com sucesso!");
        $("#loginForm")[0].reset();
    } else {
        e.preventDefault();
                        }
});

$("#submitBtn").click(function (e) {
    if (validateSignupForm()) {
        alert("Cadastrado com sucesso!");
        $("#signupForm")[0].reset();
    } else {
        e.preventDefault();
    }
});

$("#cancelBtn").click(function () {
    $("#signupForm")[0].reset();
});

$("#showSignupBtn").on("click", function () {
    $("#signupForm").addClass("active");
    $("#loginForm").removeClass("active");
    $("#showSignupBtn").addClass("active");
    $("#showLoginBtn").removeClass("active");
});

$("#showLoginBtn").on("click", function () {
    $("#loginForm").addClass("active");
    $("#signupForm").removeClass("active");
    $("#showLoginBtn").addClass("active");
    $("#showSignupBtn").removeClass("active");
});

