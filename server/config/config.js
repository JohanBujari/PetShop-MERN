const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Pets", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the DB"))
  .catch((err) => console.log("Not connected", err));
