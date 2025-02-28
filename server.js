const express = require("express");
const app = express();
const cors = require("cors");

const db_connect = require("./connect_db");
require("dotenv").config();
db_connect();

app.use(express.json());
app.use(cors());
app.use("/suggestion", require("./routes/suggestion"));
app.use("/participant", require("./routes/participant"));
app.use("/challenge", require("./routes/challenge"));
app.use("/user", require("./routes/user"));
app.use("/vote", require("./routes/vote"));

app.listen(process.env.PORT, (err) =>
  err ? console.log(err) : console.log("server is running")
);
