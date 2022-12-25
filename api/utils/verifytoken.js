import jwt from "jsonwebtoken"
import {cE} from "../utils/error.js"

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(cE(401,"you are not authenticated"))
    }
    jwt.verify(token,process.env.JWT,(err, user)=>{
       if(err) return next(cE(403,"token is not valid"));
       req.user = user;
       next()
    })
}