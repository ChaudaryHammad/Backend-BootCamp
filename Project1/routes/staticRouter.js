const express = require('express');
const router = express.Router();
const Url = require('../models/url');
const { restrictTo } = require('../middleware/auth');


router.get('/admin/urls', restrictTo(['ADMIN']),async(req, res) => {
   
    const result = await Url.find({})

    return res.render('home',{
        urls:result

    });
});


router.get('/', restrictTo(['NORMAL',"ADMIN"]),async(req, res) => {
   
    const result = await Url.find({createdBy:req.user._id})

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