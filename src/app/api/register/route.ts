import connectDB from "@/utils/connect"
import User from "../../../../models/UserModels";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request: any) =>{
    try{
        const{username, email, password, profileImg} = await request.json();
        await connectDB();

         const exists = await User.findOne({$or: [{email}, {username}]});

         if(exists){
            return (
                NextResponse.json({message:"username or email already exists."},{status:500}));
         }
        const hashedPassowrd = await bcrypt.hash(password, 10);
         await User.create({username,email,password:hashedPassowrd, profileImg});
        return NextResponse.json({message:"User registered."}, {status:201})
       
    }
    catch(error){
        console.log("Error", error);
        return NextResponse.json({message:"error occured while registering."}, {status:500})
    }
}