"use strict";

const DATA_DIR = "./data";

const fs = require("fs");
const path = require("path");
const v8 = require("v8");

exports.Datastore = class Datastore {
  constructor(name, getInitialData) {
    this.name = name;
    this.file = path.join(__dirname, DATA_DIR, name);
    if (fs.existsSync(this.file)) {
      this.data = v8.deserialize(fs.readFileSync(this.file));
      console.log(`Loaded ${name} with existing data from disk`);
    } else {
      this.data = getInitialData();
      console.log(`Initialized ${name} with fresh data`);
    }
    setInterval(() => {
      this.save();
    }, 1000 * 60 * 5);
    process.on("exit", () => {
      this.save();
    });
    process.on("SIGINT", () => {
      process.exit(1);
    });
    process.on("SIGUSR2", () => {
      process.exit(1);
    });
    process.on("uncaughtException", () => {
      process.exit(1);
    });
  }
  save() {
    console.log(`Saving datastore ${this.name}`);
    fs.writeFileSync(this.file, v8.serialize(this.data));
  }
};