const bcrypt = require("bcryptjs");
const userRegister = async (req, res) => {
  let {
    userFullName,
    userEmail,
    userPassword,
    userConfirmPassword,
    userPhone,
  } = req.body;
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let errors = {
    userFullName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
    userPhone: "",
  };

  if (!userFullName) {
    errors.userFullName = "Username Required";
  } else if (userFullName.length < 3 || userFullName.length > 50) {
    errors.userFullName = `Username must be between 3 - 50 char. Your Name length : ${userFullName.length}`;
  }
  if (!userEmail) {
    errors.userEmail = "Email Required";
  } else if (!pattern.test(userEmail)) {
    errors.userEmail = "Please enter a valid Email";
  }
  if (!userPassword) {
    errors.userPassword = "Password Required";
  } else if (userPassword.length < 6 || userPassword.length > 50) {
    errors.userPassword = `Username must be between 3 - 50 char. Your Password length : ${userPassword.length}`;
  }
  if (!userConfirmPassword) {
    errors.userConfirmPassword = "ConfirmPassword Required";
  } else if (userPassword !== userConfirmPassword) {
    errors.userConfirmPassword = "ConfirmPassword Not match !";
  }
  if (!userPhone) {
    errors.userPassword = "User Phone Number Required";
  } else if (!userPhone.startsWith("0")) {
    errors.userPhone = "User Phone number must start with 0.";
  } else if (userPhone.length < 11) {
    errors.userPhone = "User Phone number can not be Less than 11 digits.";
  } else if (userPhone.length > 11) {
    errors.userPhone = "User Phone number can not be Greater than 11 digits.";
  }

  let hash = await bcrypt.hash(userPassword, 10);

  if (
    errors.userFullName === "" &&
    errors.userEmail === "" &&
    errors.userPassword === "" &&
    errors.userConfirmPassword === "" &&
    errors.userPhone === ""
  ) {
    res.send({
      success: {
        FullName: userFullName,
        email: userEmail,
        password: hash,
        phone: userPhone,
      },
    });
  } else {
    res.send({ Errors: errors });
  }
};

module.exports = { userRegister };
