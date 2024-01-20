const mongoose = require('mongoose');

async function connectToMongo(){
    return mongoose.connect('mongodb+srv://backend:admin12345@cluster0.jaut1ye.mongodb.net/').then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{   
    console.log(err);
})

}

module.exports = {
    connectToMongo
}; 