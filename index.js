const express = require("express");
const mongoose = require("mongoose");
const userRegistrationController = require("./src/controller/userRegistrationController");
const app = express();
const port = 3000;
// const
// Mongodb Connection
mongoose
  .connect(
    "mongodb+srv://ramen:k6fptL17QZvCSO9G@oya.ecqa0f3.mongodb.net/examDB?retryWrites=true&w=majority&appName=OYA"
  )
  .then(() => {
    console.log("Mongodb Connected");
  });

app.use(express.json());

app.post("/registration", userRegistrationController.userRegister);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
