const express = require("express");
const PORT = 5000;
const app = express();
const users = require("./data.json");
const fs = require("fs");
const mongoose = require("mongoose");

const userRouter = require("./routes/user");
app.use("/users",userRouter)
app.use(express.urlencoded({ extended: false }));




// listening to server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
