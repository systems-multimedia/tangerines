var register = document.querySelector('#register'),
    login = document.querySelector('#inSession');

var error = document.querySelector('.error');

(function () {


    function checkData(e) {
        if (login.email.value == 0) {
            error.innerHTML = '*Insert your email';
            e.preventDefault();
            return false;
        } else if (login.email.value != 'admin@tangerine.com') {
            error.innerHTML = '*Unknown User';
            e.preventDefault();
            return false;
        } else {
            if (login.password.value != 'admin') {
                error.innerHTML = '*Wrong Password';
                e.preventDefault();
                return false;
            }
        }

        e.preventDefault();
        document.location.href = "../../html/dashboard.html";
    }

    function checkRegister(e) {

    }


    function validate(e) {
        checkData(e);
    }

    login.addEventListener('submit', validate);
    register.addEventListener('submit', checkRegister);
}());