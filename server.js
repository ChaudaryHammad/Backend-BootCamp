const express = require('express');
const mongoose = require('mongoose');
const ProductModel = require('./Models/Product');
const PORT = 8000;


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/product', async(req,res)=>{
    try {
        const product = await ProductModel.find({})
        res.status(200).json(product)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:error.message,
        })
    }
});

app.get('/product/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await ProductModel.findById(id);
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message,
        })
    }
})

app.post('/product', async(req,res)=>{
    try {
        const product = await ProductModel.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
})

mongoose.connect("mongodb+srv://backend:Admin12345@cluster0.60lrh3b.mongodb.net/backend?retryWrites=true&w=majority").then(()=>{
    console.log(`Connected with mongoDB`);
    app.listen(PORT,()=>{
        console.log(`Server is running on PORT ${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})

