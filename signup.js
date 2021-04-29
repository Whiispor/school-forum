const { Datastore } = require("./racco.js");

const users = new Datastore("users", () => ({}));

function signup(name, email, password, confirm_password) {
  if (password !== confirm_password) {
    throw new Error("");
  }
  users.data[email] = { name: name, email: email, password: password };
}
