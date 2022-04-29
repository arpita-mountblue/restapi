const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://moviedb:moviedb@cluster0.nmyfl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .then(() => {
    console.log("connection is sucessful");
  })
  .catch((e) => {
    console.log("no connection", e);
  });
