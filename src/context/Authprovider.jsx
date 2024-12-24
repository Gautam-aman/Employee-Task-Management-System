import React, { createContext, useEffect, useState } from "react";
import { Getlocalstorage } from "../utils/localstorage";

export const AuthContext = createContext();

const Authprovider = ({children})=>{

    const [userdata , setuserdata]=useState(null)
    
    useEffect(()=>{
        const {employees , admin } = Getlocalstorage();
        setuserdata({employees,admin});
    },[])

return (
    <div>
        <AuthContext.Provider value={userdata}>
        {children}
        </AuthContext.Provider>

        

    </div>
)
}

export default Authprovider