const router = require('express').Router()
const express = require('express')
const app = express()
const bcrypt = require('bcryptjs')

const conn = require('../connnection/connection')
const multer = require('multer')
const path = require('path') // Menentukan folder uploads
const fs = require('fs') // menghapus file gambar

/////--------------post movies -----//////////
router.post('/movies' , (req, res) => { // CREATE USER
    var sql = `INSERT INTO movies SET ? ;` // Tanda tanya akan digantikan oleh variable data
    var sql2 = `SELECT * FROM movies;`
    // var sql3 = `insert into movcat set movie_id join movies where movie_id = movies.id ; `
    var data = req.body // Object dari user {username, name, email, password}
    console.log(req.body);
   
    conn.query(sql, data, (err, result) => {
       if(err) return res.send(err.sqlMessage) // Error pada post data
       console.log(result);
       
        conn.query(sql2, (err, result) => {
            if(err) return res.send(err) // Error pada select data
            res.send(result)
        })
        // conn.query(sql3, (err, result) => {
        //     if(err) return res.send(err) // Error pada select data
        //     res.send(result)
        // })
    })
})

////----------- edit movies --------/////////
router.put('/movies/:id' , (req, res) => { 
    
    const data = [req.body, req.params.id];
    const sql = `UPDATE movies SET ? WHERE id = ?`;
    
    conn.query(sql, data, (err, result) => {
        if(err) return res.status(400).send(err.sqlMessage)
        res.send(result)
    })
})



///////---------- delete movies -------/////////
router.delete('/movies/:id', (req, res)=>{
    var delet = `delete from movies where id = ?`
    conn.query(delet, req.params.id, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})



//////--------- show all data movies ----------///////
router.get('/movies', (req, res) => {
    const sql = `SELECT * FROM movies;`
    conn.query(sql, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
    })
})



//////-------- add categories ------ ///////
router.post('/categories' , (req, res) => { // CREATE USER
    var sql = `INSERT INTO categories SET ?;` // Tanda tanya akan digantikan oleh variable data
    var sql2 = `SELECT * FROM categories;`
    // var sql3= `insert into movcat set (select category_id FROM movcat join categories WHERE category_id = categories.id); `
    var data = req.body // Object dari user {username, name, email, password}
    console.log(req.body);
   
    conn.query(sql, data, (err, result) => {
       if(err) return res.send(err.sqlMessage) // Error pada post data
       console.log(result);
       
        conn.query(sql2, (err, result) => {
            if(err) return res.send(err) // Error pada select data
            res.send(result)
        })
        // conn.query(sql3, (err, result) => {
        //     if(err) return res.send(err) // Error pada select data
        //     res.send(result)
        // })
    })
})

///////------- edit categories -------/////
router.put('/categories/:id' , (req, res) => { 
    
    const data = [req.body, req.params.id];
    const sql = `UPDATE categories SET ? WHERE id = ?`;
    
    conn.query(sql, data, (err, result) => {
        if(err) return res.status(400).send(err.sqlMessage)
        res.send(result)
    })
})

///////---------- delete categories -------/////////
router.delete('/categories/:id', (req, res)=>{
    var delet = `delete from categories where id = ?`
    conn.query(delet, req.params.id, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

//////--------- show all data categories ----------///////
router.get('/categories', (req, res) => {
    const sql = `SELECT * FROM categories;`
    conn.query(sql, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
    })
})
//////-------------- add conection ----------//////////
router.post('/connection', (req,res) => {
    const {movie_id, category_id} = req.body; data = req.body
    const sql = `INSERT INTO movcat (movie_id, category_id) VALUE (${movie_id},${category_id})`

    conn.query(sql, data, (err, result) => {
        if (err) return res.send("gagal terkoneksi")
        res.send(result)
    })
})
// Delete Connection
router.delete('/connection/:id', (req, res)=>{
    var delet = `delete from movcat where id = ?`
    conn.query(delet, req.params.id, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

module.exports = router 
// module.exports = app