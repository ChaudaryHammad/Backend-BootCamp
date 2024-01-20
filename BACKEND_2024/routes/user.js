const express = require('express');
const router = express.Router();
const {handleGetAllUsers,handleCreateUser,handleDeleteUser,handleGetUserById,handleUpdateUser} = require('../controller/user');


  
  router.get("/",handleGetAllUsers);
  
  router.get("/:id",handleGetUserById );
  
  router.post("/",handleCreateUser );
  
  router.patch("/:id", handleUpdateUser);
  
  router.delete("/:id", handleDeleteUser);


  module.exports = router;