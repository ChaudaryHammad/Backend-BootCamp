const User = require("../models/user");

async function handleUserSingup(req,res){
    const {name,email,password} = req.body
    const user = await User.create({
        name,
        email,
        password,
    });

    return res.redirect("/")
}


async function handleAllUsers(req, res) {
  const users = await User.find({});
  res.render("users", { users });
}


async function handleUserLogin(req,res){
    const {name,email,password} = req.body
    const user = await User.findOne({
        email,password
    })

    if(!user){
       return res.render("login",{
   
        error:"Invalid email or password"
       })
    }

    return res.redirect("/")
}




module.exports = { handleAllUsers ,handleUserSingup,handleUserLogin};