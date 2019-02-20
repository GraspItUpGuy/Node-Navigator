const express = require('express')
const ejs = require('ejs')

const app = express()
const port = process.env.PORT || 3000;


app.set('views', __dirname + 'views')
app.set('view engine' , 'ejs')




app.get('/', (req,res)=>{ res.render('index.ejs') })

app.listen(port , ()=> console.log(`server running on port : ${port}`))


