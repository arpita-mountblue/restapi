const mongoose = require("mongoose");
let dotenv = require("dotenv");

dotenv.config();
console.log(process.env.DB);
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("connection is sucessful");
  })
  .catch((e) => {
    console.log("no connection", e);
  });
