
function login() {
    if (email === 'ale@gmail.com' && password === 'meowsss') {
        window.location.href = "student_view.html";
    } else {
        alert('Invalid email or password. Please try again.');
    }
}
