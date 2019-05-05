const router = require('express').Router()
const express = require('express')
const app = express()
const bcrypt = require('bcryptjs')
const isEmail = require('validator/lib/isEmail')
const conn = require('../connnection/connection')
const multer = require('multer')
const path = require('path') // Menentukan folder uploads
const fs = require('fs') // menghapus file gambar


// router.post('/customers',async(req,res)=>{
//     var sql = `INSERT INTO customers SET ?;` // Tanda tanya akan digantikan oleh variable data
//     var sql2 = `SELECT * FROM customers;`
//     var data = req.body 
//     // validasi untuk email
//     if(!isEmail(req.body.email)) return res.send("Email is not valid")
//     conn.query(sql, data, (err, result) => {
//         if(err) return res.send(err.sqlMessage) // Error pada post data

//         conn.query(sql2, (err, result) => {
//             if(err) return res.send(err) // Error pada select data

//             res.send(result)
//         })
//     })
// })

router.post('/customers',  (req, res) => { // CREATE USER
    var sql = `INSERT INTO customers SET ?;` // Tanda tanya akan digantikan oleh variable data
    var sql2 = `SELECT * FROM customers;`
    var data = req.body // Object dari user {username, name, email, password}

    // validasi untuk email
    if(!isEmail(req.body.email)) return res.send("Email is not valid")
    // ubah password yang masuk dalam bentuk hash
    

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err.sqlMessage) // Error pada post data

        

        conn.query(sql2, (err, result) => {
            if(err) return res.send(err) // Error pada select data

            res.send(result)
        })
    })
})

module.exports = router 