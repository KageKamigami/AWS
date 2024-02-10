function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email === 'ale@gmail.com' && password === 'meowsss') {
        window.location.href = "code.html";
    } else {
        alert('Invalid email or password. Please try again.');}
    

function code(string studentCode){
    var studentCode = document.getElementById('code').value;
    if(studentCode == "hack123"){
        window.location.href = "balance_view.html";
    }
