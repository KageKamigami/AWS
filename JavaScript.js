
function login() {
    // Get the email and password entered by the user
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === 'example@example.com' && password === 'password') {
        window.location.href = "student_view.html";
    } else {
        alert('Invalid email or password. Please try again.');
    }
}
