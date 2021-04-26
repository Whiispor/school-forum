const {people} = require("./data");

exports.signup = (username, password) => {
    people.data.set(username, {password});
}

exports.checkPassword = (username, password) => {
    return people.data.get(username).password === password;
}

function reg(username, password) {
    const user = {
        email = username,
        psw = password,
    }
    console.log(user)
}