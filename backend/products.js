const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb+srv://sayed:012301050180@cluster0.4ajsa.mongodb.net/")
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log("error with connecting with the DB ", error);
  });

app.listen(3000, () => {
  console.log("I am listening in port 3000");
});
