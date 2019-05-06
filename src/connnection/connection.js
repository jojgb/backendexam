const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'root',
    password: 'admin',
    host: 'localhost',
    database: 'ujianbackend',
    port: '3306'
})


// const conn = mysql.createConnection({
//     user: 'adminjon',
//     password: 'admin123',
//     host: 'db4free.net',
//     database: 'cinema_booking',
//     port: '3307'
// })
module.exports = conn