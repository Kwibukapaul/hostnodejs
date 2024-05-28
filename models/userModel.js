// userModel.js
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'bgsvhkdhhswxsgfhmyko-mysql.services.clever-cloud.com',
    user: 'ulgx4zcwk59htbft',
    password: 'aIV0ggB78mtucAo52Rv0',
    database: 'bgsvhkdhhswxsgfhmyko'
}); // Assuming you have a database connection

const getUserByuser_name = (user_name, callback) => {
    const query = 'SELECT * FROM users WHERE user_name = ?';
    pool.query(query, [user_name], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results[0]); // Assuming user_name is unique, so we return the first result
    });
};

module.exports = { getUserByuser_name };
