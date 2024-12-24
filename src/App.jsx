import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/login";
import Empdash from "./components/dashboard/Empdash";
import Admindash from "./components/dashboard/Admindash";
import { Setlocalstorage } from "./utils/localstorage";
import { AuthContext } from "./context/Authprovider";

const App = ()=>{

  useEffect(()=>{
    Setlocalstorage()
  })

  const [User , setUser ] = useState(null);

  const handlelogin=(email , password)=>{
    if (email == 'employee3@example.com' && password==123){
      console.log("user")
      setUser('employees')

    }
    else if (email == "admin@example.com" && password==123){
      console.log("admin")
      setUser('admin')
    }
    else{
      console.log("Invalid credentials")
    }
  }

  const data = useContext(AuthContext);
  console.log(data)

  return ( 
 <>
 
 {!User?<Login handlelogin={handlelogin}/>:''}
 (User=='admin'? <Admindash/> : <Empdash/>)
 </>
  
  )
}

export default App