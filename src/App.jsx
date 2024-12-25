import React, { useContext, useState } from "react";
import Login from "./components/Auth/login";
import Empdash from "./components/dashboard/Empdash";
import Admindash from "./components/dashboard/Admindash";
import { AuthContext } from "./context/Authprovider";
import { Setlocalstorage } from "./utils/localstorage";

const App = ()=>{

  

  const [User , setUser ] = useState(null);
  const [Loggedinuser , setLoggedinuser] =useState(null);
  const [userdata , setUserdata] = useContext(AuthContext);
  const Authdata = useContext(AuthContext);


   useEffect(()=>{

    const Loggedinuser = localStorage.getItem('Loggedinuser')
    if (Loggedinuser){
      const userdata = JSON.parse(Loggedinuser);
      setUser(userdata.role)
      setLoggedinuser(userdata.data)
    }

  },[])
 

  

  const handlelogin=(email , password)=>{
    if (email == 'admin@example.com' && password==123){
      setUser('admin')
      localStorage.setItem('Loggedinuser' , JSON.stringify({role:'admin'}))

    }
    else if (userdata){
      const employee = userdata.find((e)=e.email == email && e.password==password)
      if (employee){
        setUser('employee')
        setLoggedinuser('employee')
        localStorage.setItem('Loggedinuser', JSON.stringify({role:'employee', data:"employee"}))
      }
      //setUser('employees')
      //localStorage.setItem('Loggedinuser' , JSON.stringify({role:'employees'}))
    }
    else{
      alert("Invalid credentials")
    }
  }

  

  return ( 
 <>

{!User?<Login handlelogin={handlelogin}/>:''}
 {User=='admin'? <Admindash ChangeUser= {setUser}/> :(user == 'employee' ? <Empdash)}
 
 </>
  
  )
}

export default App