const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true });

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});