import messageModel from "../models/messageModel.js";
import asyncHandler from "../utils/asyncHandler.js";

export const sendMessageController = asyncHandler(async (req,res) => {
    const { reciever, message } = req.body

    if(!reciever || !message){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
    }
    const text = await messageModel.create({
            sender: req.user._id,
            reciever,
            message
        });


        res.status(201).json({
            success: true,
            text
        });
})