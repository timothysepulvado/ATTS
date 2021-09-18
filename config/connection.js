const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/<project3_db_name>";

mongoose.connect(MONGODB_URI, { })
.then(() => console.log("you are connected to mongodb"))
.catch((err) => console.log(err));;

module.exports = mongoose.connection;