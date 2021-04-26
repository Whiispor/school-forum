const { Datastore } = require("./racco");

exports.people = new Datastore("people", () => new Map());

