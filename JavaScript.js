
function login() {
    if (email === 'ale@gmail.com' && password === 'meowsss') {
        window.location.href = "code.html";
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

function code(string studentCode){
    if(studentCode == "hack123"){
        window.location.href = "balance_view.html";
    }
    else{
        alert('Invalid code. Please try again.');
    }
}
