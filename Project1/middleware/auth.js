const { get } = require("mongoose");
const { getUser } = require("../service/auth");

function checkForAuthentication(req, res, next) {
  const tokenCookie = req.cookies?.token;
 
    if (!tokenCookie) {
        return next();
    }

  const token = tokenCookie;
  const usser = getUser(token);

  req.user = usser;
  next();
}

function restrictTo(roles=[]){
    return function(req,res,next){
        if(!req.user){
           return res.redirect("/login")
        }

        if(!roles.includes(req.user.role)){
            return res.end('You are not allowed to access this route')
        }

        return next()
    }
}

module.exports = { checkForAuthentication,restrictTo };
