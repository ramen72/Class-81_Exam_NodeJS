const express = require("express");
const app = express();
const port = 3000;

// Mongodb Connection
mongoose
  .connect(
    "mongodb+srv://ramen:k6fptL17QZvCSO9G@oya.ecqa0f3.mongodb.net/oyaTodoList?retryWrites=true&w=majority&appName=OYA"
  )
  .then(() => {
    console.log("Mongodb Connected");
  });

app.use(express.json());

app.post("/registration", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
