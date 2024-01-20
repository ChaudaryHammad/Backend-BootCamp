const express = require('express');
const { handleGenerateNewShortUrl,handleGetAnalytics,handleAllUrls } = require('../controllers/url');   
const router = express.Router();

router.get('/',handleAllUrls)
router.post('/',handleGenerateNewShortUrl)
router.get('/analytics/:shortID',handleGetAnalytics)

module.exports = router;