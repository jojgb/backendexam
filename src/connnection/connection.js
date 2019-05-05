const mysql = require('mysql')

// const conn = mysql.createConnection({
//     user: 'root',
//     password: 'admin',
//     host: 'localhost',
//     database: 'cinema_booking',
//     port: '3307'
// })


const conn = mysql.createConnection({
    user: 'adminjon',
    password: 'admin123',
    host: 'db4free.net',
    database: 'cinema_booking',
    port: '3307'
})
module.exports = conn