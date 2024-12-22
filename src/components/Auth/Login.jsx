import React, { useState } from "react";



const Login =()=>{


    const [email , setEmail]= useState('')
const [password , setPassword] = useState('')


const submithandler=(e)=>{
    
    console.log("Login working");
    console.log(email)
    setEmail("")
    setPassword("")
    
}

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-black">
            <div className="border-2 p-10 border-emerald-600 rounded-xl">
                <form onSubmit={(e)=>{
                    submithandler(e)
                }} className="flex flex-col items-center justify-center">


                    <input value={email} required  onChange={(e)=>{
                        setEmail(e.target.value);

                    }} className=" text-white outline-none bg-transparent border-2 rounded-full border-emerald-600 py-4 px-5 text-xl placeholder:text-gray-500" type="email" placeholder="Enter Your Office Mail"/>
                   
                   
                    <input value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} required className=" text-white mt-2 outline-none bg-transparent border-2 rounded-full border-emerald-600 py-4 px-5 text-xl placeholder:text-gray-500" type="password" placeholder="Enter Your Password" />
                    <button className="w-full text-white mt-2 bg-emerald-600 outline-none bg-transparent border-2 rounded-full border-emerald-600 py-4 px-5 text-xl placeholder:text-white">Login</button>
                </form>

            </div>
        </div>
    )
}

export default Login