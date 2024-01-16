const express = require("express");
const PORT = 5000;
const app = express();


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



app.get("/", (req, res) => {
 return  res.send("home page");
});

app.get("/about", (req, res) => {
  return res.send("about page" + " hi " + req.query.name);
});

app.get("/contact", (req, res) => {
  return res.send("contact page");
});




// listening to server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
