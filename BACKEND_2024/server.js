const express = require("express");
const PORT = 5000;
const app = express();
const {connectMonodb} = require('./connection');

const userRouter = require("./routes/user");
app.use("/api/users",userRouter)

// middleware
app.use(express.urlencoded({ extended: false }));
connectMonodb();


// listening to server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
