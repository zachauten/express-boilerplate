const db = require('./db');

module.exports.getUsers = async () => {
    let { rows } = await db.query('select * from users');
    return JSON.stringify(rows);
};