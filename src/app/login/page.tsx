"use client"
import { Button } from "@/components/ui/button"
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
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import {signIn} from "next-auth/react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Login() {
  const router = useRouter();

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  function handleInputEmail(e) {
    setEmail(e.target.value);
   

  }
  function handleInputPassword(e) {
    setPassword(e.target.value);
    
  }


  async function handleSubmit(e) {
    
    if ( !email || !password ) {
      setError("Must provide all the credentials.");
      return;
    }
  

    try {
      setPending(true);
      const res  = signIn("credentials",{
        email:email,
        password : password,
        redirect:false
      })
      if(res.error){
        setError("Invalid credentials.")
        setPending(false);
        return;
      }
      router.replace("/")

     
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
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <div className="border rounded-lg shadow-sm">
          <Input  id="email" type="email" placeholder="m@example.com" required onChange={handleInputEmail}/>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <div className="rounded-lg border shadow-sm">
          <Input id="password" type="password" required onChange={handleInputPassword}/>
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
      <Button disabled={pending?true:false} className="w-full" onClick={handleSubmit}>{pending?"Logging in":"Login"}</Button>
      </CardFooter>
        <p className="text-center mb-4 text-xs">Don't have an account? <a className="underline " href="/register">Register</a></p>
    </Card>
    </div>
    </div>
  )
}
