import dotenv from 'dotenv'

dotenv.config()

const config = {
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    JWT_ACCESS_SECRET:process.env.JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET:process.env.JWT_REFRESH_SECRET
}

export default config