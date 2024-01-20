const shortId = require("shortid");
const Url = require("../models/url");


async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if(!body.url){
    return res.status(400).json({
        error:"URL is required"
    })
  }
  const shortID = shortId();
  const url = await Url.create({
    shortId: shortID,
    redirectURL: req.body.url,
    visitedHistory: [],
  });

  return res.render("home",{
    id:shortID
  })
 
}


async function handleGetAnalytics(req,res){
    const shortId = req.params.shortID;
    const result = await Url.findOne({shortId});

    return res.json({totalClicks: result.visitHistory.length,
    analytics:result.visitHistory})
}


async function handleAllUrls(req,res){
    const result = await Url.find({})
    res.status(200).json({
        data:result,
        Message:'Success'
    })
}







module.exports = {
    handleGenerateNewShortUrl,handleGetAnalytics,handleAllUrls
}