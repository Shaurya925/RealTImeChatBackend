import jwt from 'jsonwebtoken'
import config from '../config/config.js';
import userModel from '../models/userModel.js';
import asyncHandler from '../utils/asyncHandler.js';


export const protect = asyncHandler( async (req,res,next)=>{

    let token;

 if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){

    token = req.headers.authorization.split(" ")[1]

    if(!token){
        return res.status(400).json({
            success:false,
            message:"Invalid Token"
        })
    }
    
    const decoded = jwt.verify(token,config.JWT_ACCESS_SECRET)

    const user = await userModel.findById(decoded.id).select("-password")

    if(!user){
        return res.status(400).json({
            success:false,
            message:"User Not Found"
        })
    }

    req.user = user

 next()

 }
 else{
    return res.status(401).json({
        success:false,
        message:"Not Authorized"
    })
 }
})