const { create } = require("../services/users/create");
const { findByUsername } = require("../services/users/find");

async function _create(user) {
  return await create(user);
}

async function _findByUsername(username) {
  //é passado o parametro de busca
  return await findByUsername(username);
}

module.exports = { _create, _findByUsername };
