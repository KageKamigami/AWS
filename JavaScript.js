class UserData {
    constructor(email, password, name, balance, birthday) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.balance = balance;
        this.birthday = birthday;
    }
}

function parseStudentData() {
    const fs = require('fs');
    let fileContent = fs.readFileSync("logins.txt", 'utf8');
    let lines = fileContent.split('\n');
    let parsed = [];

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


function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var userData = parseStudentData();

    var loggedInUser = userData.find(user => user.email === email && user.password === password);

    if (loggedInUser) {
        window.location.href = "student_view.html";
    } else {
        alert('Invalid email or password. Please try again.');
    }
}


function listTransactions(filename) {
    const fs = require('fs');
    let fileContent = fs.readFileSync(filename, 'utf8');
    let lines = fileContent.split('\n');
    let transactions = [];

    for (const line of lines) {
        let parts = line.trim().split(/\s+/);
        if (parts.length >= 2) {
            let note = parts[0];
            let money = parseInt(parts[1]);
            transactions.push({ note, money });
        }
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
                s.balance += change;
                break;
            }
        }
    } else {
        console.error("Error: Student not found.");
    }

    addNewTransaction("transactions.txt", student, change);
}
