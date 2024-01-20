const express = require('express')
const PORT= 5000;
const app = express();
const path = require('path')
app.set('view engine','ejs')
app.set('views',path.resolve(__dirname,'views'));


app.use(express.json())
app.get('/test',(req,res)=>{
  res.render('home',{
        title:"Home page",
        name:'hammad'
  })
})




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})