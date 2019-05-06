const express = require('express')
const customersRouter = require('./router/customersRouter')
const app = express()

// const port = process.env.PORT
const port = 2079


// app.get('/',(req,res)=>{
//     res.send(`<h1>running on port ${port}</h1>`)
// })

app.use(express.json())
app.use(customersRouter)

app.listen(port, (err) => {
    if(err) console.log("Failed Connect to Server");
    console.log("Running at ", port);
})