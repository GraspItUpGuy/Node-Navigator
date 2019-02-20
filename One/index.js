const express = require('express')
const  bodyParser = require('body-parser')
const path  = require('path')

const app = express()
const port  = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))



app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(port, ()=> console.log(`Server running at port : ${port}`) )

