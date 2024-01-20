const User = require("../models/User");

async function handleGetAllUsers(req,res){
    const users = await User.find({})
    return res.status(200).json(users);
}


async function handleGetUserById(req,res){
    const id = req.params.id;
  
    const user = await User.findById(id)
   
    res.status(200).json(user);
}


async function handleCreateUser(req,res){

    const body = req.body;
    console.log(body);
   if(!body || !body.first_name || !body.last_name || !body.gender || !body.job_title || !body.email || !body.password){
    return res.status(400).json({
      status: "error",
      message: "Please provide all the required fields",
    }); 
  
   }
  
   const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    gender: body.gender,
    job_title: body.job_title,
    email: body.email,
    password: body.password,
  
   });
  
  
   return res.status(201).json({
    message:"User created successfully",
  data:result
   })
}


async function handleUpdateUser(req,res){
    const id = req.params.id;
    const updateUser = await User.findByIdAndUpdate(id,{
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      gender:req.body.gender,
      job_title:req.body.job_title,
      email:req.body.email,
      password:req.body.password, 
    })
  
    const result = User.create(updateUser)
  
  
    return res.status(200).json({
      message:"User updated successfully",
      data:result
    });
}


async function handleDeleteUser(req,res){
    const id = req.params.id;
    const deleted_user = await User.findByIdAndDelete(id);
    return res.status(200).json({
      message:"User deleted successfully",
      data:deleted_user
    })
}

module.exports = {handleGetAllUsers,handleGetUserById,handleCreateUser,handleUpdateUser,handleDeleteUser};
