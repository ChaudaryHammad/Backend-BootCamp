const express = require('express');
const router = express.Router();
const Url = require('../models/url');
router.get('/', async(req, res) => {
    const result = await Url.find({})

    return res.render('home',{
        urls:result

    });
});



module.exports = router;