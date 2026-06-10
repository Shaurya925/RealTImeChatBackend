import mongoose from "mongoose"
import config from "../config/config.js"

const connectDB = async ()=>{
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("Connected To DB")
    } catch (error) {
        console.error("Error in connecting the DB",error.message)
        return 1
    }
}

export default connectDB