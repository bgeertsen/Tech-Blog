const express = require("express");
const sequelize = require("./config/connection");
const PORT = process.env.PORT || 3001;
const routes = require("./controllers");

const app = express();

app.use(express.json());

app.use(routes);
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});
