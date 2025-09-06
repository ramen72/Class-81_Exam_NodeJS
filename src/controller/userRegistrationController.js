const userRegister = async (req, res) => {
  let { username, email, password, phone } = req.body;

  res.send(req.body);
};

const userList = async (req, res) => {
  res.send("test");
};

module.exports = { userRegister, userList };
