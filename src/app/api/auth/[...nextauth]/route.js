"use client"
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../../models/UserModels";
import bcrypt from "bcryptjs"
import connectDB from "@/utils/connect"
import { useRouter } from "next/navigation";

const router = useRouter();
async function login (credentials){
  console.log(credentials.email)
  try{
    connectDB();
    console.log("Into try")
    const user = await User.findOne({email:credentials.email});
    if(!user) throw new Error("wrong Credentials.");
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if(!isCorrect){
      throw new Error("Wrong Credentials.");
    }
    return user;
  }catch(error){
console.log("error while logging in.");
throw new Error("Something went wrong.")
  }
}


export const authOptions = {
  pages:{
    signIn:"/login"
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {}, 

      async authorize(credentials) {
        console.log(credentials)
        try {
          const user = await login(credentials)
          return user;
        } catch (error) {
          throw new Error("Failed to load")
        }
      },
    }),
  ],
callbacks:{
  async jwt({token,user}){
    if(user){
      token.username = user.username;
      token.email = user.email;
      token.id = user.id;
      token.image = user.image;
    }
    return token;
  },
  async session({session, token}){
    if(token){
      session.user.username = token.username;
      session.user.email = token.email;
      session.user.id = token.id;
      session.user.image = token.image;
    }
    return session;
  }
}
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
 