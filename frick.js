const { Datastore } = require("./racco");

const accounts = new Datastore("accounts", () => ({}));

app.post("/login", (req, res) => {
  ispasswordright(req.body.username, req.body.password);
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (username in accounts.data) {
    res.body("you are dumb");
    return;
  }

  accounts.data[username] = { username, password };
});
accounts.data["elijah"] = { username: "elijah", password: "feet" };
// accounts.data["tombl"] = { username: "tombl", password: "ilovejoel69" };

function ispasswordright(username, password) {
  return accounts.data[username].password === password;
}

console.log(ispasswordright("elijah", "feet"));
