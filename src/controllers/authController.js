import userModel from "../models/userModel.js";
import asyncHandler from "../utils/asyncHandler.js";
import bcrypt from "bcrypt"
import { generateAccessToken } from "../utils/generateToken.js";

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

export const loginController = asyncHandler(async (req,res) =>{
    const {email,password} = req.body

    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"Email and Password is required"
        })
    }

    const user = await userModel.findOne({ email })

    if(!user){
        return res.status(400).json({
            success:false,
            message:"Invalid Credentials"
        })
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        return res.status(400).json({
            success:false,
            message:"Invalid Credentials"
        })
    }


    const accessToken = generateAccessToken(user._id)

    res.status(200).json({
        success:true,
        token:accessToken,
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })
})