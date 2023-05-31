const db = require("../../models");
const user = require("../../models/user");

//Passa o que quer busca no parametro
async function findByUsername(username) {
  if (!username) throw new Error("Erro");
  return await db.user.findAll({
    where: {
      username, //O codigo diz o seguinte, pesquise por username usando o modelo do user no banco de dados
    },
  });
}

module.exports = {
  findByUsername,
};
