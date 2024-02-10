
function login() {
    // Get the email and password entered by the user
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === 'ale@gmail.com' && password === 'meowsss') {
        window.location.href = "student_view.html";
    } else {
        alert('Invalid email or password. Please try again.');
    }
}
