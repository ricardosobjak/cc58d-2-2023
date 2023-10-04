var express = require('express');
var router = express.Router();

const lista = [
  { id: 1, nome: "Juca" },
  { id: 2, nome: "Ze" },
  { id: 3, nome: "Julia" }
];

/**
 * Obter peloI ID
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;  //desestruturação
  //const id = req.params.id;
  
  const user = lista.find(e => e.id == id);

  return user ? res.json(user) : res.sendStatus(404);
}); 


/**
 * Obter todos os usuários da API
 */
router.get('/', (request, response) => {
  response.json(lista);
});

router.post("/", (req, res) => {
  res.send("funcionou POST");
});

router.put("/", (req, res) => {
  res.send("funcionou put");
});

router.delete("/", (req, res) => {
  res.send("funcionou delete");
});

module.exports = router;
