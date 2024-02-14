require("dotenv").config();

const mongoose = require("mongoose");
const Task = require("../models/tasks.model");
const server = "127.0.0.1:27017";
const database = "notebook";
const mongoURL = process.env.MONGO_URL;


mongoose.set("strictQuery", false);
const db = async () => {
  try {
    await mongoose.connect(`mongodb://${server}/${database}`);
    console.log("MongoDB Connected!!");
  } catch (err) {
    console.log("Failsed to connect", err);
  }
};

module.exports = db;