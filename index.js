const port = 3000;
const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`rodando na porta ${port}`);
});

db.sequelize
  .sync({ alter: true })
  .then(() => console.log("concetado"))
  .catch((e) => console.log(e));
