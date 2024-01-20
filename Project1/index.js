const express = require("express");
const app = express();
const PORT = 5000;
const urlRoute = require("./routes/url");
const { connectToMongo } = require("./connection");
const Url = require("./models/url");
app.use(express.json());
connectToMongo();

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await Url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  res.redirect(entry.redirectURL);
});
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
