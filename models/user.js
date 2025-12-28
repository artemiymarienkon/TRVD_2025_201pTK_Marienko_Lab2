const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/users.json');

function getAllUsers() {
    if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]');
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

function addUser(user) {
    const users = getAllUsers();
    users.push(user);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

module.exports = { getAllUsers, addUser };
