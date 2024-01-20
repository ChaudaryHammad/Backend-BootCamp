const express = require('express');
const app = express();
const PORT = 5000;




app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server is running on port ${PORT}`);
    }
})