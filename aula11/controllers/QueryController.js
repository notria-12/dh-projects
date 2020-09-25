const QueryController = {
    getNome: (req, res) => {
        let {nome} = req.params;
        let {sobrenome} = req.query;
    
        res.send('Olá '+nome+" "+sobrenome)
    }
}

module.exports = QueryController;