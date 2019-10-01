const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

const db = require("./config/keys").mongoURL;

mongoose
  .connect(db)
  .then(() => console.log(`MongoDB Connected`))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hi I very like u so much"));

//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server runnung on port ${port}`));
