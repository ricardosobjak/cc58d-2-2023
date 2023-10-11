var express = require('express');
var router = express.Router();
const User = require("../models/User");
const { mongo, default: mongoose } = require('mongoose');

/**
 * Obter peloI ID
 */

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    new mongoose.Types.ObjectId(id);
  } catch(err) {
    return res.status(400)
      .json({ message: "O formato do ID é inválido"})
  }

  const user = await User.findById(id);

  return user 
    ? res.json(user) 
    : res.status(404).json({ message: "ID inexistente"});
}); 


/**
 * Obter todos os usuários da API
 */
router.get('/', async (request, response) => {
  const users = await User.find();

  return response.json(users);
});

/**
 * Cadastrar um usuário na collection
 */
router.post("/", async (req, res) => {
  const user = req.body;

  const result = await User.create(user);

  return res.json(result);
});

/**
 * Atualizar um usuário
 */
router.put("/:id", async (req, res) => {
  const userJson = req.body; // Dados do usuário para atualizar
  const { id } = req.params; // O id do usuario

  try {
    new mongoose.Types.ObjectId(id);
  } catch(err) {
    return res.status(400).json({ message: "O formato do ID é inválido"})
  }

  const userConfere = await User.findById(id);
  
  if(userConfere) {
    userJson.updatedAt = new Date();
    userJson.createdAt = userConfere.createdAt;

    // Fazer a validação dos atributos do objeto
    const hasErrors = new User(userJson).validateSync();
    if(hasErrors) return res.status(400).json(hasErrors);

    await User.updateOne({_id: id}, userJson);
    return res.json(userJson);
  }

});


/**
 * Deletar um usuario pelo ID
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    new mongoose.Types.ObjectId(id);
  } catch(err) {
    return res.status(400)
      .json({ message: "O formato do ID é inválido"})
  }

  const result = await User.deleteOne({ _id: id });
  //User.findByIdAndDelete(id);

  return result.deletedCount > 0 
    ? res.send() 
    : res.status(404).json({ message: "ID inexistente"});
}); 


module.exports = router;