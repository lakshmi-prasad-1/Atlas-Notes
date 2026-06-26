import mongoose from "mongoose";
export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI) 
        console.log("database connected successfully !");
    } catch (error) {
        console.log("connecting database was failed");
        process.exit(1);
    }
}