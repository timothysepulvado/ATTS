const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/connection");

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.json({ message: "welcome "});
})

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
  });
});
