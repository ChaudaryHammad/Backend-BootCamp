const express = require('express');
const multer = require('multer');

const cloudinary = require('cloudinary').v2;
const asyncHandler = require('express-async-handler');


//config cloudinary

cloudinary.config({
    cloud_name: process.env.APP_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.APP_CLOUDINARY_API_KEY,
    api_secret: process.env.APP_CLOUDINARY_SECRET_KEY
})


const uploadMultipe=asyncHandler(async(req,res,next)=>{
    try {
        const images = req.files
        
    } catch (error) {
        res.status(500).send(`internal error at :${error}`)
    }
})