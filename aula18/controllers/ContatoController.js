let contatos = [
    {
      'id': 1,
      'nome': 'Victor Torres',
      'email': 'vtorres@digitalhouse.com',
      'mensagem': 'Primeira mensagem',
    },
    {
      'id': 2,
      'nome': 'Victor Torres',
      'email': 'murilo@digitalhouse.com',
      'mensagem': 'Segunda mensagem',
    },
    {
      'id': 3,      
      'nome': 'Victor Torres',
      'email': 'victor@digitalhouse.com',
      'mensagem': 'Terceira mensagem',
    },
  ];

module.exports = {
    registrar(req, res, next){
        res.send(req.body)
    },

    listar(req,res, next){

    }
}
