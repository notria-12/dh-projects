var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let cards = [
    {
      'caminho_imagem': './images/card-vingadores.jpg',
      'titulo': 'First title',
      'texto': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, velit odit illum qui iusto doloremque id non accusantium. Laudantium accusamus aut, sed facere ex enim illo in! Modi, maiores sint.',
      'botao': 'Ver mais'
    },
    {
      'caminho_imagem': './imagens/card-vingadores.png',
      'titulo': 'First title',
      'texto': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, velit odit illum qui iusto doloremque id non accusantium. Laudantium accusamus aut, sed facere ex enim illo in! Modi, maiores sint.',
      'botao': 'Ver mais'
    },
    {
      'caminho_imagem': './imagens/card-vingadores.png',
      'titulo': 'First title',
      'texto': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, velit odit illum qui iusto doloremque id non accusantium. Laudantium accusamus aut, sed facere ex enim illo in! Modi, maiores sint.',
      'botao': 'Ver mais'
    },
  ];
  res.render('index', {cards:cards});
});

module.exports = router;
