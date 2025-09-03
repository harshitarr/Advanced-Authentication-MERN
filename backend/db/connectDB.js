import mongoose from 'mongoose'

export const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected : ${conn.connection.host}`)
    }

    catch(error){
        console.log("MongoDB is not connected ",error.message)
        process.exit(1)  //failure - 1 and sucessful - 0
    }
}