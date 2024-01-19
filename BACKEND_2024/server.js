const express = require("express");
const PORT = 5000;
const app = express();
const users = require("./data.json");
const fs = require("fs");
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://backend:admin12345@cluster0.jaut1ye.mongodb.net/").then(()=>{
  console.log("db connected");
}).catch((err)=>{
  console.log(err);
});

// app.get("/", (req, res) => {
//   const log = `${Date.now()}: ${req.url} New request Recieved \n`;
//   const myurl = url.parse(req.url,true);
//   console.log(myurl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (req.url) {
//       case "/":
//         res.end("home page");
//         break;
//       case "/about":
//         res.end("about page");
//         break;
//       case "/contact":
//         res.end("contact page");
//         break;
//     }clear
//   });
// });

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    job_title: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
  
);


const User = mongoose.model("User", userSchema);

app.get("/users", async(req, res) => {
  const users = await User.find()
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>`;

  res.send(html);
});

app.get("/api/users", async(req, res) => {
  const users = await User.find({})
  return res.status(200).json(users);
});

app.get("/api/users/:id", async(req, res) => {
  const id = req.params.id;

  const user = await User.findById(id)
 
  res.status(200).json(user);
});

app.post("/api/users", async(req, res) => {
  const body = req.body;
  console.log(body);
 if(!body || !body.first_name || !body.last_name || !body.gender || !body.job_title || !body.email || !body.password){
  return res.status(400).json({
    status: "error",
    message: "Please provide all the required fields",
  }); 

 }

 const result = await User.create({
  first_name: body.first_name,
  last_name: body.last_name,
  gender: body.gender,
  job_title: body.job_title,
  email: body.email,
  password: body.password,

 });


 return res.status(201).json({
  message:"User created successfully",
data:result
 })

});

app.patch("/api/users/:id", async(req, res) => {
  const id = req.params.id;
  const updateUser = await User.findByIdAndUpdate(id,{
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    gender:req.body.gender,
    job_title:req.body.job_title,
    email:req.body.email,
    password:req.body.password, 
  })

  const result = User.create(updateUser)


  return res.status(200).json({
    message:"User updated successfully",
    data:result
  });
});

app.delete("/api/users/:id", async(req, res) => {
  const id = req.params.id;
  const deleted_user = await User.findByIdAndDelete(id);
  return res.status(200).json({
    message:"User deleted successfully",
    data:deleted_user
  })
});

// listening to server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
