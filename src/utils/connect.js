import mongoose from "mongoose"

export default async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to db.");
    }catch(error){
        console.log("Error while connecting.", error);
    }
}