const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')
const QueryController = require('../controllers/QueryController')
const routes = express.Router()

routes.get('/', (req, res) =>{
    res.send('Página Home');
})

routes.get('/query/params/:nome', QueryController.getNome)

routes.get('/produtos/adicionar/:nome/:preco/:quantidade/:codigo', ProdutoController.getProduto)

module.exports = routes;