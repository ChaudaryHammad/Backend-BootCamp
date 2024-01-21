const express = require('express');
const router = express.Router();
const Url = require('../models/url');
router.get('/', async(req, res) => {
    const result = await Url.find({})

    return res.render('home',{
        urls:result

    });
});

router.get('/signup',(req,res)=>{
   return res.render('signup')
})


router.get('/login',(req,res)=>{
    return res.render('login')
 })


module.exports = router;