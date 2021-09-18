const mongoose = require("mongoose");


module.export = mongoose.connect(process.env.dbURI)
  .then((result) =>console.log("db is connected"))
  .catch((err) => console.log(err));

