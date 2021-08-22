const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

const DB_USER = "cvadmin";
const DB_PASSWORD = encodeURIComponent("Miki@12345");
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster1.twxfq.mongodb.net/CVDB?retryWrites=true&w=majority`;

// app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json());

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })  
  .then(() => {
    console.log(`connecting to database was successfully!`);
    // if connection to the db was ok then
    app.listen(process.env.PORT || PORT, (err) => {
      if (err) console.log(err);
      else
        console.log(
          `Server started listening to PORT ${process.env.PORT || PORT}.`
        );
    });
  })
  .catch((err) => {
    console.log(err);
  });
