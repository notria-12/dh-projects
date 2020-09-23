const express = require('express')
const routes = express.Router()


routes.get('/', (req,res) =>{
    res.send('testando');
})

routes.get('/home', (req,res) =>{
    res.send('Você está na pagina Inicial');
})

routes.get('/users', (req,res) =>{
    res.send('Você está na página de usuários');
})

routes.get('/users', (req,res) =>{
    res.send('Você está na página de usuários');
})

routes.get('/produtos/adicionar/:nome/:preco/:quantidade/:codigo', (req,res) =>{
    let {nome, preco, quantidade, codigo} = req.params;

    res.send({nome, preco, quantidade, codigo})
})

module.exports = routes