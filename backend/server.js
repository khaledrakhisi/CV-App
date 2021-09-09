const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const HttpError = require("./models/HttpError");
const worksRouter = require("./Routes/WorksRoute");
const resumeRouter = require("./Routes/ResumeRoute");
const usersRouter = require("./Routes/UsersRoute");
const notesRouter = require("./Routes/NotesRoute");

const app = express();
const PORT = 5000;

const DB_USER = "cvadmin";
const DB_PASSWORD = encodeURIComponent("Miki@12345");
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster1.twxfq.mongodb.net/CVDB?retryWrites=true&w=majority`;

// app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json());

app.use("/uploads/images", express.static(path.join("uploads", "images")));

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  
  next();
});

app.use("/api/works", worksRouter);
app.use("/api/resume", resumeRouter);
app.use("/api/users", usersRouter);
app.use("/api/notes", notesRouter);
app.use((req, res, next)=>{
  throw new HttpError("Page Not Found", 404);
});

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })  
  .then(() => {
    console.log(`connecting to the database was successfully!`);
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
