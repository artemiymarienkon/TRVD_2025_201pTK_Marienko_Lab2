const User = require('../models/user');

exports.getUsers = (req, res) => {
    const users = User.getAllUsers();
    res.render('users', { users });
};

exports.createUser = (req, res) => {
    const { name, email, age } = req.body;
    User.addUser({ name, email, age });
    res.redirect('/users');
};
