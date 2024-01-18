const express = require("express");
const PORT = 5000;
const app = express();
const users = require("./data.json");
const fs = require("fs");
app.use(express.urlencoded({ extended: false }));
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

app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>`;

  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.status(200).json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const filtered_user = users.find((user) => user.id === id);
  console.log(filtered_user);
  res.status(200).json(filtered_user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./data.json", JSON.stringify(users), (err, data) => {
    return res.json({
      status: "success",
      data: data,
      id: users.length,
    });
  });
});

app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const updatedData = req.body;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedData };
    fs.writeFile("./data.json", JSON.stringify(users), (err, data) => {
      return res.status(200).json({
        status: "success",
        data: data,
        message: "User updated successfully",
      });
    });
  } else {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  return res.status(200).json("");
});

app.delete("/api/users/:id", (req, res) => {

  const id = Number(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);

  if(userIndex!==-1){
    users.splice(userIndex,1);
    fs.writeFile("./data.json", JSON.stringify(users), (err, data) => {
      return res.status(200).json({
        status: "success",
        data: data,
        message: "User deleted successfully",
      });
    });
  }
  else{
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  };

})


// listening to server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
