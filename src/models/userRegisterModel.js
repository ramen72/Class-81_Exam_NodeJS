const mongoose = require("mongoose");
const { Schema } = mongoose;

const userRegisterModel = new mongoose.Schema({
  userFullName: String,
  userEmail: String,
  userPassword: String,
  userConfirmPassword: String,
  userPhone: String,
});

module.exports = mongoose.model("RegisteredUser", userRegisterModel);
