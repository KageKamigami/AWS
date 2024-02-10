

function parseStudentData() {
    const fs = require('fs');
    let fileContent = fs.readFileSync("logins.txt", 'utf8');
    let fileContent = fs.readFileSync("logins", 'utf8');
    let lines = fileContent.split('\n');
    let parsed = [];

    for (let line of lines) {
        let parts = line.trim().split(/\s+/);
        if (parts.length >= 5) {
            let data = new UserData(parts[0], parts[1], parts[2], parseInt(parts[3]), parts[4]);
            parsed.push(data);
    for (let i = 1; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line) {
            let parts = line.split(/\s+/);
            if (parts.length >= 5) {
                let data = new UserData(parts[0], parts[1], parts[2], parseInt(parts[3]), parts[4]);
                parsed.push(data);
            }
        }
    }
    return parsed;
}


function studentList(userData) {
    return userData.map(data => ({ name: data.name, balance: data.balance }));
}

function userLogIn(email, password, userData) {
    let name = '';
    for (const data of userData) {
        if (data.email === email && data.password === password) {
            name = data.name;
            return { loggedIn: true, name };
        }
    }
    return { loggedIn: false, name };
}

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var userData = parseStudentData();
    var result = userLogIn(email, password, userData);

    var loggedInUser = userData.find(user => user.email === email && user.password === password);

    if (loggedInUser) {
    if (result.loggedIn) {
    if (email === 'ale@gmail.com' && password === 'meowsss') {
        window.location.href = "student_view.html";
    } else {
        alert('Invalid email or password. Please try again.');
  function listTransactions(filename) {
    let fileContent = fs.readFileSync(filename, 'utf8');
    let lines = fileContent.split('\n');
    let transactions = [];

    for (const line of lines) {
        let parts = line.trim().split(/\s+/);
        if (parts.length >= 2) {
 function listTransactions(filename) {
    }
    return transactions;
}

function addNewTransaction(filename, note, money) {
    const fs = require('fs');
    fs.appendFileSync(filename, `${note} ${money}\n`);
}

function editMoney(student, amount, userData, students) {
    const fs = require('fs');
    let change = parseInt(amount);
    let found = false;

    for (let data of userData) {
        if (data.name === student) {
            data.balance += change;
            found = true;
            break;
        }
    }

    if (found) {
        for (let s of students) {
            if (s.name === student) {
 function editMoney(student, amount, userData, students) {
    } else {
        console.error("Error: Student not found.");
    }

    addNewTransaction("transactions.txt", student, change);
}

 

function code(string studentCode){
    var studentCode = document.getElementById('code').value;
    if(studentCode == "hack123"){
        window.location.href = "balance_view.html";
    }
    else{
        alert('Invalid code. Please try again.');
    }
}
