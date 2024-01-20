const monggose = require('mongoose');

async function connectMonodb(){
    try{
        await monggose.connect('mongodb+srv://backend:admin12345@cluster0.jaut1ye.mongodb.net/');
        console.log("db connected");
    }catch(err){
        console.log(err);
    } 
}

module.exports = {connectMonodb}


