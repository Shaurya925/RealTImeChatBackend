import userModel from "../models/userModel.js";
import asyncHandler from "../utils/asyncHandler.js";
import bcrypt from "bcrypt"

export const registerController = asyncHandler(async (req,res) => {
    const {username,email,password} = req.body

    if(!username || !email|| !password){
        return res.status(400).json({
            success:false,
            message:"All the fields are required"
        })
    }

    const existingUser = await userModel.findOne({ email })

    if(existingUser){
         return res.status(400).json({
            success:false,
            message:"User with this email already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password:hashedPassword,
    })

    res.status(201).json({
        success:true,
        user
    })

})