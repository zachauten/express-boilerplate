var usersData = require('../data/usersData');

module.exports.getUsers = async (req, res, next) => {
    let users = await usersData.getUsers();
    res.send(users);
};