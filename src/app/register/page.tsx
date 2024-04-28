"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation" 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default function Register() {
  const router = useRouter();
  const [username , setUsername] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [profileImg, setImage] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  function handleInputUsername(e) {
    setUsername(e.target.value);
    
  }
  function handleInputEmail(e) {
    setEmail(e.target.value);
   

  }
  function handleInputPassword(e) {
    setPassword(e.target.value);
    

  }

  function convertToBase64(e){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () =>{
      setImage(reader.result);
    }

    reader.onerror = error =>{
      console.log("Error", error);
    }
  }
  

  async function handleSubmit(e) {
    
    if (!username || !email || !password || !profileImg) {
      setError("Must provide all the credentials.");
      return;
    }
  
    try {
      setPending(true);
  
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          profileImg
        }),
      });
  
      if (res.ok) {
        setPending(false);
        router.push("/login")
        console.log("User registered");
      } else {
        const errorData = await res.json();
        setError(errorData.message);
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      console.log("Error:", error);
    }
  }
  
 
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div>
        <p className="text-center font-semibold text-3xl mb-4">ZUAI</p>
        
        <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle className="text-2xl">Singup</CardTitle>
        <CardDescription>
          set your email and password below to create your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <div className="border rounded-lg shadow-sm">
          <Input  id="username" type="text" placeholder="" required onChange={(e)=>handleInputUsername(e)} />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <div className="border rounded-lg shadow-sm">
          <Input  id="email" type="email" placeholder="m@example.com" required onChange={(e)=>handleInputEmail(e)} />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <div className="rounded-lg border shadow-sm">
          <Input id="password" type="password" required onChange={(e)=>handleInputPassword(e)} />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="profilepic">Profile picture</Label>
          <div className="rounded-lg border shadow-sm">
          <Input id="profilepic" type="file" required onChange={convertToBase64} />
          </div>
        </div>
        {error && <Alert>
  <AlertTitle className="text-red-500">Alert</AlertTitle>
  <AlertDescription>
    {error}
  </AlertDescription>
</Alert>
}
      </CardContent>
      <CardFooter>
        
        <Button disabled={pending?true:false} className="w-full" onClick={handleSubmit}>{pending?"Registering":"Register"}</Button>
      </CardFooter>
    </Card>
    </div>
    </div>
  )
}
