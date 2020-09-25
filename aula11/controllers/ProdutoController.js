const ProdutoController = {
    getProduto: (req,res) =>{
        let {nome, preco, quantidade, codigo} = req.params;
    
        res.send({nome, preco, quantidade, codigo})
    }
}

module.exports = ProdutoController