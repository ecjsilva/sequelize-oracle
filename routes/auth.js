const express = require("express");
const { _create, _findByUsername } = require("../controller/users");
const router = express.Router();

//Rota para criação de usuario
router.post("/signup", async (req, res) => {
  try {
    //Tente
    const user = await _create(req.body); //user recebe uma requisição do body
    return res.status(200).json({
      status: "success",
    });
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.get("/signup", async (req, res) => {
  try {
    const user = await _findByUsername(req.body.username); //user recebe uma requisição do body buscando o username
    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

module.exports = router;
