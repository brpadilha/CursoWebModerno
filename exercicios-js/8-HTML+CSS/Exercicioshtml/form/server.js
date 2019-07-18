const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) //transforma o objeto passado no corpo da requisição em objeto

app.post('/exercicios-js/8-HTML+CSS/Exercicioshtml/form/usuarios', (req, resp)=>{
   console.log(req.body) 
   resp.send('<h1>Parabéns</h1>')
})

app.listen(3003)