const db = require("../../models");

async function create(user) {
  if (!user.username) throw new Error("erro");
  if (!user.password) throw new Error("erro");

  return await db.user.create(user)
}

module.exports = {
    create
}