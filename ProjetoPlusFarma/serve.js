// importando o nosso express
const express = require('express')
const app = express()
const port = 3000

// static file
app.use(express.static('public'))
app.use('/css', express.static(__dirname +'public/css'))
app.use('/js', express.static(__dirname +'public/js'))
app.use('/img', express.static(__dirname +'public/img'))

//set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/home', (req,res) =>{
    res.render('home')
})
app.get('/login', (req,res) =>{
    res.render('login')
})
app.get('/RecSenha', (req,res) =>{
    res.render('RecSenha')
})
app.get('/register', (req,res) =>{
    res.render('register')
})




//permitir servidor se comunicar com o navegador
app.listen(port, function(){
    console.log('porta 3000')
})



